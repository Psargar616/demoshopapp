import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  // const [title, setTitle] =  useState(props.title);
  // useState hook is used to rerender UI 
  const [title, setTitle] = useState(props.title);


  function clickHandler() {
    //title = "Popcorn";
    // setTitle("Popcorn");
    // setTitle is used to update the value of 'title' and rerender UI
    setTitle('Popcorrrrn');
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      {/* onclick fires clickHandler function */}
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;