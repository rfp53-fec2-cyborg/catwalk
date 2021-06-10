import React from 'react';
import ReactDOM from 'react-dom';
import Requester from './Requester.js';
import {MakeRating} from './helpers/MakeRating.js';
import Overview from './components/overview/Overview.jsx';
import Comparison from './components/comparison/Comparison.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import QandA from './components/qanda/QandA.jsx';

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
  }

  componentDidMount() {
    this.loadFirstProduct();
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
    return requester.getProducts({page: 1, count: 1})
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
      this.fetchAndStore(requester.getReviews, 'reviews', { 'product_id': 17070 }),
      this.fetchAndStore(requester.getReviewsMeta, 'reviewsMeta', { 'product_id': productID }),
      this.fetchAndStore(requester.getCart, 'cart', null)
    ])
      .then(() => {
        return this.addRatingsMeta();
      })
      .then(() => {
        this.setState({isLoaded: true});
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
      const ratingsMeta = MakeRating(state.reviewsMeta.ratings);
      for (const key in ratingsMeta) {
        reviewsMeta[key] = ratingsMeta[key];
      }
      return { reviewsMeta };
    });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <Overview
            product={this.state.product}
            styles={this.state.styles}
            cart={this.state.cart}
            reviewsMeta={this.state.reviewsMeta}
          />
          <Comparison
            relatedProducts={this.state.relatedProducts}
          />
          <Reviews
            reviews={this.state.reviews}
            reviewsMeta={this.state.reviewsMeta}
          />
          <QandA />
        </div>
      );
    } else {
      return (
        <div>
          Insert fun loading animation here
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
