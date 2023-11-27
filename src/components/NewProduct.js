import './NewProduct.css'
import ProductForm from './ProductForm.js'

function NewProduct(props){

    function saveProduct(product){
        console.log('inside NewProduct');
        console.log(product);

        // calling parent function
        props.printData(product);
    }
    
    return(
        <div className='new-product'>
            <ProductForm onSaveProduct = {saveProduct}></ProductForm>
        </div>
    )
}

export default NewProduct;