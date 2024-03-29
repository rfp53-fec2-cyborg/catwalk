import './css/style.css';
import './css/comparison.css';
import './css/overview.css';
import './css/reviews.css';
import './css/loadingSpinner.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Requester from './Requester.js';
import { MakeRating } from './helpers/MakeRating.js';
import withClickReporting from './helpers/withClickReporting.js';
import Header from './components/Header.jsx';
import Overview from './components/overview/Overview.jsx';
// import Comparison from './components/comparison/Comparison.jsx';
// import Reviews from './components/reviews/Reviews.jsx';
import LoadingSpinner from './components/shared/LoadingSpinner.jsx';
import LazyImage from './components/shared/LazyImage.jsx';
import _ from 'underscore';

const Comparison = React.lazy(() => import('./components/comparison/Comparison.jsx'));
const Reviews = React.lazy(() => import('./components/reviews/Reviews.jsx'));


const requester = Requester();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: {},
      relatedProducts: [],
      reviews: {},
      reviewsMeta: {},
      cart: [],
      isLoaded: false
    };
    this.loadFirstProduct = this.loadFirstProduct.bind(this);
    this.fetchAndStore = this.fetchAndStore.bind(this);
    this.loadAllProductData = this.loadAllProductData.bind(this);
    this.handleNewProductOnClick = this.handleNewProductOnClick.bind(this);
  }

  componentDidMount() {
    /*
    Comments re: the initial function to call on component render in ln 46 and 47

.   If the id is known and will not change, initial loading can be fixed to reduce loading time
    We can bypass the and load all product data for a particular id instead

    If the id is not known or may change, initial query to find all data, then determine first id to load
    all product data for would be suggested
    */

    // this.loadFirstProduct();
    this.loadAllProductData(17067);
  }

  /**
   * Fetches a single, arbitrary product from the server along with associated data and stores
   * data to App state. This function is meant to be called when the page is first loaded so that
   * the page shows some meaningful content when first loaded.
   */
  loadFirstProduct() {
    return this.getArbitraryProduct()
      .then(product => {
        return this.loadAllProductData(product.id);
      })
      .catch(console.log);
  }

  /**
   * Fetches an arbitrary product from the server
   * @returns A promise that resolves to a single product
   */
  getArbitraryProduct() {
    return requester.getProducts({ page: 1, count: 1 })
      .then(products => {
        return products[0];
      })
      .catch(console.log);
  }

  /**
   * Fetches all data associated with a product and stores data into App state
   * @param {string or number} productID Product ID to be used to fetch product and associated data
   * @returns A promise that resolves to undefined
   */
  loadAllProductData(productID) {
    return Promise.all([
      this.fetchAndStore(requester.getProduct, 'product', productID),
      this.fetchAndStore(requester.getProductStyles, 'styles', productID),
      this.fetchAndStore(requester.getRelatedProducts, 'relatedProducts', productID),
      this.fetchAndStore(requester.getReviews, 'reviews', { 'product_id': productID, 'count': 999 }),
      this.fetchAndStore(requester.getReviewsMeta, 'reviewsMeta', { 'product_id': productID }),
      this.fetchAndStore(requester.getCart, 'cart', null)
    ])
      .then(() => {
        return this.addRatingsMeta();
      })
      .then(() => {
        this.setState({ isLoaded: true });
      })
      .catch(console.log);
  }

  /**
   * Fetches data from the server and stores results in App state
   * @param {function} requesterFunc The function to be called on the requester object. This
   * function will fetch data from the server.
   * @param {string}   stateProp     The name of the property in state where the data will be
   * stored.
   * @param {...any}   requesterArgs Any arguments to be passed to the requester function.
   * @returns A promise that resolves to undefined
   */
  fetchAndStore(requesterFunc, stateProp, ...requesterArgs) {
    return requesterFunc(...requesterArgs)
      .then(result => {
        var newState = {};
        newState[stateProp] = result;
        this.setState(newState);
        return Promise.resolve();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  addRatingsMeta() {
    return this.setState(state => {
      const reviewsMeta = state.reviewsMeta;
      const ratingsMeta = MakeRating(state.reviewsMeta.ratings, state.reviews.results);
      for (const key in ratingsMeta) {
        reviewsMeta[key] = ratingsMeta[key];
      }
      return { reviewsMeta };
    });
  }

  handleNewProductOnClick(productID) {
    this.setState({
      isLoaded: false
    });
    _.debounce(this.loadAllProductData(productID), 3000);
  }

  render() {
    const OverviewWithClickReporting = withClickReporting(Overview, 'Overview');
    return (
      <div className='app'>
        <Header />
        {this.state.isLoaded ?
          <>
            <Overview
              product={this.state.product}
              styles={this.state.styles.results}
              cart={this.state.cart}
              reviewsMeta={this.state.reviewsMeta}
            />
            <Suspense fallback={ <LoadingSpinner />} >
              <Comparison
                relatedProducts={this.state.relatedProducts}
                fetchAndStore={this.fetchAndStore}
                addRatingsMeta={this.addRatingsMeta}
                handleNewProductOnClick={this.handleNewProductOnClick}
              />
            </Suspense>
            <Suspense fallback={ <LoadingSpinner />} >
              <Reviews
                product={this.state.product}
                reviews={this.state.reviews}
                reviewsMeta={this.state.reviewsMeta}
              />
            </Suspense>
          </> :
          <LoadingSpinner />
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
