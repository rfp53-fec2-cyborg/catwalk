import React, {useEffect, useState/*, useContext*/} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import UserOutfitItems from './UserOutfitItems.jsx';
import {products} from '../../../mock-data/products.js';
import {productStyles} from '../../../mock-data/productStyles.js';
import Requester from '../../Requester.js';


// console.log(products);

const rerequester = Requester();
const Comparison = ({/*product,*/ relatedProducts, styles}) => {
  let mockProducts = products;
  let mockStyles = productStyles;
  // console.log(mockStyles);
  // const [data] = useState(mockProducts);
  // console.log(styles);
  let detaledRelatedProductsArr = [];
  // console.log(relatedProducts); // [17068, 17069, 17074, 17073]
  let getTheDeets = ()=> {
    return Promise.all(relatedProducts.map(relatedProduct => rerequester.getProduct(relatedProduct)))
      .then((data) => {
        // console.log('inside', data);
        addOne(data);
      })
      .catch(console.log());
  };
  getTheDeets();

  let addOne = (targets) => {
    for (let i = 0; i < targets.length; i++) {
      // console.log(targets[i]); // last place i can get to individual prods :'(
      detaledRelatedProductsArr.push(targets[i]);
    }
    return detaledRelatedProductsArr;
  };
  // console.log('why cant i get the individual value?', detaledRelatedProductsArr[0]); // maybe its an async thing? maybe i need to leverage the lifecycle and have it in state? maybe in index?

  // need several functions here
  // function that will handle product click
  // function that will handle the compare Modal
  // function that will handle adding an item to the outfit list
  // function that will handle removing an item form the outfit list

  return (
    <div style={{display: 'grid', gridTemplateColumns: '=400px', gridTemplateRows: '400px', gap: '0px 0px'}}>
      <RelatedProducts detaledRelatedProductsArr={detaledRelatedProductsArr} mockProducts={mockProducts} mockStyles={mockStyles}/>
      {/* <UserOutfitItems productStyles={productStyles}/> */}
    </div>
  );
};

export default Comparison;