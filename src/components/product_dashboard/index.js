import React,{useState} from 'react';
import ProductForm from '../product_form';
import CategoryForm from '../category_form';
import Button from '@material-ui/core/Button';
const ProductDashboard = () => {
    const [currentForm,setForm]=useState('')
    return (<>
    <div style={{marginTop:'20px'}}>
        <Button variant="contained" color="primary" onClick={()=>setForm('category')}>
            Add Category
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('product')} style={{marginLeft:'20px'}}>
            Add Product
        </Button>
    </div>
       
    {currentForm ==="product" && <ProductForm />}
    {currentForm ==="category" && <CategoryForm />}
    </>
    );
}
 
export default ProductDashboard;

