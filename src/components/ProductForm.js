import './ProductForm.css'
import React, { useState } from 'react';

function ProductForm(props){
    const [newTitle , setTitle ] = useState('');
    const [newDate , setDate ] = useState('');

    function TitleChangeHandler(event){
        // console.log("input change");
        // console.log(event.target.value);
        setTitle(event.target.value);

    }

    function DateChangeHandler(event){
        // console.log(event.target.value);
        setDate(event.target.value);
        console.log(newTitle);
        console.log(newDate);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate

        }

        // console.log(productData);
        // 
        props.onSaveProduct(productData);

        setTitle("");
        setDate("");

    }

    return(
        <form className='new-product__controls' onSubmit={submitHandler} >
            <div className='new-prooduct-title'>
                <label>Title</label>
                <input type="text" value={newTitle} onChange={TitleChangeHandler}></input>
            </div>
            <div className='new-prooduct-date'>
                <label>Date</label>
                <input type="date" value={newDate} onChange={DateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-prooduct-btn'>
                
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )

}

export default ProductForm;