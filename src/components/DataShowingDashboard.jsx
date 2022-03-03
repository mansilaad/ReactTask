import React,{useState,useEffect} from 'react';
import { Button, Container, Grid,Typography } from '@mui/material';
import ItemCard from './ItemCard';

const DataShowingDashboard = () => {
 
  const [items,setItems]=useState(getLocalItems());
  function getLocalItems() {
    let item= localStorage.getItem('Items');
    if(item){
        let ourData=JSON.parse(localStorage.getItem('Items'));
        console.log("ourData",ourData);
        return ourData;
    }else{
        return [];
    }
  
}
  useEffect(()=>{
    
 },[items]);

  //console.log("localdata", data);
  return (
    <>
     <Grid direction="row" style={{ border:'2px solid black', borderRadius:'2rem',padding:"2rem",marginTop:'1rem'}}>
     {items.map((data) => {
                            return (
                                <ItemCard data={{ ...data }} />
                            )
                        })}
     </Grid>
        
    </>
  )
}

export default DataShowingDashboard

