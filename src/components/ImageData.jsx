import React , {useState} from 'react';
import { Grid ,Typography,Button} from '@mui/material';



const ImageData = ({handleSave}) => {
  const [values, setvalues] = useState({
    image:'',
    title: "",
    description: "",
    quantity: '',
    price: '',
    date: ""

})
const [error, setError] = useState({})
const vals = (event) => {
  setvalues({
      ...values,
      [event.target.name]: event.target.value
  })
}
const validation = () => {
  let error = {};
  let isError = false;
  if (!values.title) {
      error.title = "Enter Title"
      isError = true
  }
  if (!values.description) {
      error.description = "Enter description"
      isError = true
  }
  if (!values.quantity) {
      error.quantity = "Enter quantity"
      isError = true
  }
  if (!values.price) {
      error.price = "Enter price"
      isError = true
  } if (!values.date) {
      error.date = "Enter date"
      isError = true
  } 
  return { error, isError }
}
const validateLogin = () => {
  const { error, isError } = validation()
  setError(error)
  if (!isError) {
    console.log(values);
    handleSave(values);
  }
}

  return (
    <Grid container direction="row" justifyContent="space-evenly" style={{ border:"2px solid black", borderRadius:'5px', padding:'1rem', marginBottom:'1rem'}}>
                    <Grid item>
                      Image
                    </Grid>
                    <Grid item>
                    <input type="text" placeholder="Title" name="title" onChange={vals}/>
                    {error.title && <Typography variant="body2" style={{  marginLeft: '4%',
        color: 'red'}}>{error.title}</Typography>}
                    </Grid>
                    <Grid item>
                    ​<textarea rows="5" placeholder='description' name='description' onChange={vals}></textarea>
                    {error.description && <Typography variant="body2" style={{  marginLeft: '4%',
        color: 'red'}}>{error.description}</Typography>}
                    </Grid>
                    <Grid item>
                    <input type="number" placeholder='quantity' name="quantity" onChange={vals}/>
                    {error.quantity && <Typography variant="body2" style={{  marginLeft: '4%',
        color: 'red'}}>{error.quantity}</Typography>}
                    </Grid>
                    <Grid item>
                    <input type="number" placeholder='price' name="price" onChange={vals}/>
                    {error.price && <Typography variant="body2" style={{  marginLeft: '4%',
        color: 'red'}}>{error.price}</Typography>}
                    </Grid>
                    <Grid item>
                    <input type="date" name="date" onChange={vals}/>
                    {error.date && <Typography variant="body2" style={{  marginLeft: '4%',
        color: 'red'}}>{error.date}</Typography>}
                    </Grid>
                        <Button
                            variant='contained'
                            color="secondary"
                            onClick={validateLogin}
                        >
                            Save
                        </Button>
                    </Grid>
  )
}

export default ImageData