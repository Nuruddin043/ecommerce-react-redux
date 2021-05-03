import React,{useState} from 'react';
import CategoryUpdateForm from '../category_update';
import CategoryForm from '../category_form';
import Button from '@material-ui/core/Button';
import CategoryDelete from '../../components/category_delete'
const CategoryDashboard = () => {
    const [currentForm,setForm]=useState('category')
    return (<>
    <div style={{marginTop:'20px'}}>
        <Button variant="contained" color="primary" onClick={()=>setForm('category')}>
            Add Category
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('update_category')} style={{marginLeft:'20px'}}>
            Update Category
        </Button>
        <Button variant="contained" color="primary" onClick={()=>setForm('delete_category')} style={{marginLeft:'20px'}}>
            Delete Category
        </Button>
        
    </div>
    
    {currentForm ==="category" && <CategoryForm />}
    {currentForm ==="update_category" && <CategoryUpdateForm />}
    {currentForm ==="delete_category" &&  <CategoryDelete />}
    </>
    );
}
 
export default CategoryDashboard;

