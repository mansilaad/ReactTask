import React,{useState,useEffect} from 'react';
import ImageData from './ImageData';
import { Button, Container, Grid,Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DataShowingDashboard from './DataShowingDashboard';

const Dashboard = () => {
  let deatilsObj=[];
 
  const [data,setData]= useState(getLocalItems());
  
  //const [counter,setCounter]=(0);
  let count=3;
  const Comp=({handleSave})=>{
      for(let i=0;i<count;i++){
       return (
        <Grid item>
        <ImageData handleSave={handleSave}/>
        </Grid>
       )
        
      }
  }
  
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
    localStorage.setItem("Items",JSON.stringify(data))
 },[data]);

  const increment=()=>{
    count= count+1;
   //setCounter(count);
  }
  const decrement=()=>{
    if(count>1){
      count=count-1;
     //setCounter(count);
    }
  }
  const onSubmit= ()=>{
    
    alert("data submitted");
  }
  const handleSave = async (values) => {
    try {
      await setData([...data,values]);
    } catch (e) {
        console.log('errrr', e);
        alert("Opps... Something went wrong.")
    }
  }
 

  return (
    <>
    <Grid direction="row" style={{ border:'2px solid black', borderRadius:'2rem',padding:"2rem"}}>
    <Grid container direction="row">
    <Grid container item direction="column" md={11}>
     <Comp handleSave={handleSave}/>
     {/* <ImageData {...props}/> */}
    <Grid item>
    <ImageData handleSave={handleSave}/>
    </Grid>
       <Grid item>
       <ImageData handleSave={handleSave}/>
       </Grid>
    </Grid>
    <Grid container item direction="column" md={1} justifyContent="center" alignItems="center">
    <Grid item xs={6}>
      <AddIcon style={{ height:'100%',cursor:'pointer'}} onClick={increment}/>
    </Grid>
    <Grid item xs={6}>
    <RemoveIcon style={{ height:'100%', cursor:'pointer'}} onClick={decrement} />
    </Grid>
    </Grid>
    
      
    </Grid>
    {/* <Grid item container justifyContent="flex-end">
    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
    </Grid> */}
    </Grid>

    <DataShowingDashboard items={data}/>
</>
  )
}

export default Dashboard