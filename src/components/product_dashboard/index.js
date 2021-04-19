import React,{useState} from 'react';
import ProductForm from '../product_form';
import ProductDelete from '../product_delete';
import ProductUpdate from '../product_update'
import Button from '@material-ui/core/Button';
const ProductDashboard = () => {
    const [currentForm,setForm]=useState('add_product')
    return (<>
    <div style={{marginTop:'20px'}}>
        <Button variant="contained" color="primary" onClick={()=>setForm('add_product')} style={{marginLeft:'20px'}}>
            Add Product
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('delete_update')} style={{marginLeft:'20px'}}>
            Update Product
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('delete_product')} style={{marginLeft:'20px'}}>
            Delete Product
        </Button>
        
    </div>
       
    {currentForm ==="add_product" && <ProductForm />}
    {currentForm ==="delete_product" && <ProductDelete />}
    {currentForm ==="delete_update" && <ProductUpdate />}
    </>
    );
}
 
export default ProductDashboard;

