import React, {useEffect, useState/*, useContext*/} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import UserOutfitItems from './UserOutfitItems.jsx';
import Requester from '../../Requester.js';
import LoadingSpinner from '../../components/shared/LoadingSpinner.jsx';

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
      styles: this.props.styles
    };
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
      // .then(this.getTheStarRating())
      .catch(() => {
        console.log('err');
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
      .catch(() => {
        console.log('err');
      });
  };

  // get and store each starRating svg num for each product in the relatedProducts array
  // getTheStarRating = ()=> {
  //   return Promise.all(this.state.relatedProducts.map(productID => rerequester.getReviewsMeta(`${productID}`)))
  //     .then((data) => {
  //       // console.log('RevMeta', data);
  //       this.setState({
  //         reviewsMetaArr: data
  //       });
  //     })
  //     .catch(() => {
  //     console.log('err');
  //   });
  // };

  componentDidMount() {
    this.getTheDeets();
  }

  render() {

    return (
      <div>
        { this.state.relatedProductsStylesArr.length ?
          <div>
            <RelatedProducts detailedRelatedProductsArr={this.state.detailedRelatedProductsArr} relatedProductsStylesArr={this.state.relatedProductsStylesArr}/>
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
