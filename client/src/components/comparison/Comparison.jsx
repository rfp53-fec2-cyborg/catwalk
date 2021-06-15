import React, {useEffect, useState/*, useContext*/} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import UserOutfitItems from './UserOutfitItems.jsx';
// import {products} from '../../../mock-data/products.js';
// import {productStyles} from '../../../mock-data/productStyles.js';
import Requester from '../../Requester.js';
import LoadingSpinner from '../../components/shared/LoadingSpinner.jsx';

const rerequester = Requester();

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts,
      detaledRelatedProductsArr: [],
      relatedProductsStylesArr: [],
      outfitList: [],
      activeIndex: 0,
      styles: this.props.styles
    };
    // this.fetchAndStore = this.props.fetchAndStore.bind(this);
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
        // console.log('this is working', data);
        this.setState({
          detaledRelatedProductsArr: data
        });
      })
      .then(this.getTheStyles())
      .catch(console.log('err?'));
  };

  getTheStyles = ()=> {
    return Promise.all(this.state.relatedProducts.map(relatedProduct => rerequester.getProductStyles(`${relatedProduct}`)))
      .then((data) => {
        // console.log('hit', data);
        this.setState({
          relatedProductsStylesArr: data
        });
      })
      // .then(this.setState({
      //   isLoaded: true
      // }))
      .catch(console.log('err??'));
  };

  componentDidMount() {
    this.getTheDeets();
  }

  render() {
    // console.log(this.state.styles);
    // console.log('loaded detaledRelatedProductsArr', this.state.detaledRelatedProductsArr);
    // console.log('relstyles', this.state.relatedProductsStylesArr);


    return (
      <div>
        { this.state.relatedProductsStylesArr.length ?
          <div style={{display: 'grid', gridTemplateColumns: '=400px', gridTemplateRows: '400px', gap: '0px 0px'}}>
            <RelatedProducts detaledRelatedProductsArr={this.state.detaledRelatedProductsArr} relatedProductsStylesArr={this.state.relatedProductsStylesArr}/>
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