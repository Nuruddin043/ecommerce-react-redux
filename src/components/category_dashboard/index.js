import React,{useState} from 'react';
import CateogryUpdate from '../category_update';
import CategoryForm from '../category_form';
import Button from '@material-ui/core/Button';
const CategoryDashboard = () => {
    const [currentForm,setForm]=useState('')
    return (<>
    <div style={{marginTop:'20px'}}>
        <Button variant="contained" color="primary" onClick={()=>setForm('category')}>
            Add Category
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('update_category')} style={{marginLeft:'20px'}}>
            Update Category
        </Button>
    </div>
    
    {currentForm ==="category" && <CategoryForm />}
    {currentForm ==="update_category" && <CateogryUpdate />}
    </>
    );
}
 
export default CategoryDashboard;

