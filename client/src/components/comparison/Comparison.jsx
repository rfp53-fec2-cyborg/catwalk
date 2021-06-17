import React, {useEffect, useState/*, useContext*/} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import UserOutfitItems from './UserOutfitItems.jsx';
import Requester from '../../Requester.js';
import LoadingSpinner from '../../components/shared/LoadingSpinner.jsx';
import { MakeRating } from '../../helpers/MakeRating.js';
import StarRating from '../shared/StarRating.jsx';

const rerequester = Requester();

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      detailedRelatedProductsArr: [],
      relatedProductsStylesArr: [],
      outfitList: [],
      reviewsMetaArr: [],
      activeIndex: 0,
      reviewsArr: [],
      currentReviewChars: {},
      styles: this.props.styles
    };
    this.fetchAndStore = this.props.fetchAndStore.bind(this);
    this.addRatingsMeta = this.props.addRatingsMeta.bind(this);
  }

  // function that will handle product click

  // function that will handle the compare Modal

  // function that will handle adding an item to the outfit list

  // handleAddOutfitItem = (product, style) => {
  //   if (!outfitList.some(obj => obj.id === product.id)) {
  //     this.setState({
  //       outfitList: [...outfitList, product]});
  //   }
  // };

  // function that will handle removing an item form the outfit list

  // get and store the product obj from each product in the relatedProducts array
  getTheDeets = ()=> {
    return Promise.all(this.state.relatedProducts.map(relatedProduct => rerequester.getProduct(relatedProduct)))
      .then((data) => {
        return this.setState({
          detailedRelatedProductsArr: data
        });
      })
      .then(() => {
        return this.getTheStyles();
      })
      .then(this.getTheReviews())
      .then(this.getTheRatingMeta())
      .catch((err) => {
        console.log('err', err);
      });
  };
  // get and store each styleObj from each product in the relatedProducts array
  getTheStyles = ()=> {
    return Promise.all(this.state.relatedProducts.map(relatedProduct => rerequester.getProductStyles(`${relatedProduct}`)))
      .then((data) => {
        return this.setState({
          relatedProductsStylesArr: data
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  // get and store each
  getTheReviews = ()=> {
    return Promise.all(this.state.relatedProducts.map(relatedProduct => {
      return rerequester.getReviews({'product_id': `${relatedProduct}`});
    }))
      .then((data) => {
        return this.setState({
          reviewsArr: data
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  // get and store each starRating svg num for each product in the relatedProducts array
  getTheRatingMeta = ()=> {
    return Promise.all(this.state.relatedProducts.map(relatedProduct => {
      return rerequester.getReviewsMeta({'product_id': `${relatedProduct}`});
    }))
      .then((data) => {
        this.setState({
          reviewsMetaArr: data
        });
      })
      .then(() => {
        // console.log(this.state.reviewsMetaArr);
        return this.setState(state => {
          let reviewsMeta = [];
          for (let j = 0; j < this.state.reviewsMetaArr.length; j++) {
            let element = this.state.reviewsMetaArr[j].ratings;
            // console.log(this.state.reviewsMetaArr[j].ratings);
            let results = this.state.reviewsArr[j];
            // console.log('abba', this.state.reviewsArr[j]);
            const reviewsMetaObj = element;
            const ratingsMetaObj = MakeRating(element, results);
            for (const key in ratingsMetaObj) {
              reviewsMetaObj[key] = ratingsMetaObj[key];
            }
            reviewsMeta.push(reviewsMetaObj);
          }
          return { reviewsMeta }; // put it in state here
        }, () =>{
          // console.log(this.state.reviewsMetaArr);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  componentDidMount() {
    this.getTheDeets();
  }

  render() {
    return (
      <div>
        { this.state.relatedProductsStylesArr.length ?
          <div>
            <RelatedProducts
              detailedRelatedProductsArr={this.state.detailedRelatedProductsArr}
              relatedProductsStylesArr={this.state.relatedProductsStylesArr}
              reviewsMetaArr={this.state.reviewsMetaArr}
              addRatingsMeta={this.addRatingsMeta}
              currentReviewChars={this.state.currentReviewChars}
            />
            {/* <UserOutfitItems productStyles={productStyles}/> */}
          </div> :
          <>
            <LoadingSpinner />
          </>
        }
      </div>
    );
  }
}

export default Comparison;