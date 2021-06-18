import React, {useEffect, useState/*, useContext*/} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import UserOutfitItems from './UserOutfitItems.jsx';
import Requester from '../../Requester.js';
import LoadingSpinner from '../../components/shared/LoadingSpinner.jsx';
import { MakeRating } from '../../helpers/MakeRating.js';
import StarRating from '../shared/StarRating.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import _ from 'underscore';

const rerequester = Requester();

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedRelatedProductsArr: [],
      relatedProductsStylesArr: [],
      outfitList: [],
      reviewsMetaArr: [],
      activeIndex: 0,
      reviewsArr: [],
      currentReviewChars: {},
      imagesToLeft: true,
      imagesToRight: true,
      cardOverflow: true
    };
    this.fetchAndStore = this.props.fetchAndStore.bind(this);
    this.addRatingsMeta = this.props.addRatingsMeta.bind(this);
    this.scrollComparisonLeft = this.scrollComparisonLeft.bind(this);
    this.scrollComparisonRight = this.scrollComparisonRight.bind(this);
    this.isOverflowing = this.isOverflowing.bind(this);
  }

  // get and store the product obj from each product in the relatedProducts array
  getTheDeets = ()=> {
    return Promise.all(this.props.relatedProducts.map(relatedProduct => rerequester.getProduct(relatedProduct)))
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
    return Promise.all(this.props.relatedProducts.map(relatedProduct => rerequester.getProductStyles(`${relatedProduct}`)))
      .then((data) => {
        return this.setState({
          relatedProductsStylesArr: data
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  // get and store each review per product
  getTheReviews = ()=> {
    return Promise.all(this.props.relatedProducts.map(relatedProduct => {
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
    return Promise.all(this.props.relatedProducts.map(relatedProduct => {
      return rerequester.getReviewsMeta({'product_id': `${relatedProduct}`});
    }))
      .then((data) => {
        this.setState({
          reviewsMetaArr: data
        });
      })
      .then(() => {
        return this.setState(state => {
          let reviewsMeta = [];
          for (let j = 0; j < state.reviewsMetaArr.length; j++) {
            let element = state.reviewsMetaArr[j].ratings;
            let results = state.reviewsArr[j];
            const reviewsMetaObj = element;
            const ratingsMetaObj = MakeRating(element, results);
            for (const key in ratingsMetaObj) {
              reviewsMetaObj[key] = ratingsMetaObj[key];
            }
            reviewsMeta.push(reviewsMetaObj);
          }
          return { reviewsMeta };
        }, () => {});
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  scrollComparisonLeft() {
    this.setState({
      imagesToTheRight: true,
    });
    const carousel = document.getElementByClassName('relatedProductsContainer');
    carousel.scrollLeft -= 316;
    if (carousel.scrollLeft <= 316) {
      this.setState({
        imagesToTheLeft: false,
      });
    }
  }

  scrollComparisonRight() {
    this.setState({
      imagesToTheLeft: true,
    });
    const carousel = document.getElementByClassName('relatedProductsContainer');
    const amountLeftToScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft += 316;
    if (carousel.scrollLeft >= amountLeftToScroll - 316) {
      this.setState({
        imagesToTheRight: false,
      });
    }
  }

  isOverflowing() {
    const carousel = document.getElementByClassName('relatedProductsContainer');
    const bool = carousel.scrollWidth > carousel.clientWidth;
    this.setState({
      cardOverflow: bool,
      imagesToTheRight: bool,
    });
  }

  componentDidMount() {
    _.debounce(this.getTheDeets(), 5000);
  }

  render() {
    return (
      <div className='relatedItemsGrid'>
        {/* <div className='rightButtonWrapper'>
          {this.state.imagesToRight ? <RightArrow scrollComparisonRight={this.scrollComparisonRight}/> : null}
        </div> */}
        { this.state.relatedProductsStylesArr.length ?
          <div>
            <RelatedProducts
              detailedRelatedProductsArr={this.state.detailedRelatedProductsArr}
              relatedProductsStylesArr={this.state.relatedProductsStylesArr}
              reviewsMetaArr={this.state.reviewsMetaArr}
              addRatingsMeta={this.addRatingsMeta}
              currentReviewChars={this.state.currentReviewChars}
              handleNewProductOnClick={this.props.handleNewProductOnClick}
            />
            {/* <div>
              {this.state.imagesToLeft ? <LeftArrow scrollComparisonLeft={this.scrollComparisonLeft}/> : null}
            </div> */}
            <UserOutfitItems outfitList={this.state.outfitList}/>
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