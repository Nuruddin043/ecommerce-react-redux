import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getuserOrder} from '../../store/action/orderAction';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Order = () => {
    const dispatch=useDispatch();
    const {userorderList}=useSelector((state)=>state.orderStore)
    const classes = useStyles();
    useEffect(()=>{
        dispatch(getuserOrder());
    },[])
    

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>OrderId</TableCell>
                <TableCell align="left">Products</TableCell>
                <TableCell align="left">Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {userorderList.length>0 && userorderList.map((row) => (
                <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row._id}
                    </TableCell>
 
                    <TableCell align="left">
                        {row.products.map((row2) => (
                            <p style={{textAlign:"left"}}>{row2.productId.title}</p>
                        ))}
                    </TableCell>
                    <TableCell align="left">{row.status == 0 ? <p style={{color:"yellowgreen"}}>Pending</p>
                    :row.status == 1 ? <p style={{color:'Green'}}>Delivered</p>:<p style={{color:"red"}}>Canceled</p>}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
 
export default Order;
