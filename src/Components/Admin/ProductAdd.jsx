import React, { useState } from 'react'
import './Admin.css'
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import axios from 'axios';

const ProductAdd = ({tags, cats}) => {


// form data manage

const [inputs, setInputs] = useState({
    name : '',
    sell_price : '',
    regullar_price : '',
    short_des : '',
    rating : '',
    catagoryid : '',
    tagid : '',
    photo : ''


})


//handle submit form

const handleFormSubmit = (e)=> {
    e.preventDefault();

axios.post('http://localhost:5080/products', inputs).then(res => {

setInputs({
    
    name : '',
    sell_price : '',
    regullar_price : '',
    short_des : '',
    rating : '',
    catagoryId : '',
    tagid : '',
    photo : ''

})
   
})

}


  return (
    <>
    <h5>Add New Products</h5>
    <Link to='/admin/products'  className='btn btn-primary btn-sm'> All Products</Link>
    <hr />

    <Form onSubmit={handleFormSubmit}>

        <FormGroup className='my-3'>
            <FormLabel>Product Name</FormLabel>
            <FormControl type='text' value={inputs.name} onChange={e => setInputs({...inputs, name : e.target.value})} placeholder='product name' />
        </FormGroup>

        <FormGroup className='my-3'>
            <FormLabel>Regullar Pricce</FormLabel>
            <FormControl type='text' value={inputs.regullar_price} onChange={e => setInputs({...inputs, regullar_price : e.target.value})} placeholder='Regullar Pricce' />
        </FormGroup>

        <FormGroup className='my-3'>
            <FormLabel>Sell Pricce</FormLabel>
            <FormControl type='text' value={inputs.sell_price} onChange={e => setInputs({...inputs, sell_price : e.target.value})} placeholder='Sell Pricce' />
        </FormGroup>
        
        <FormGroup className='my-3'>
            <FormLabel>Short Descepshion</FormLabel>
            <textarea type='text' value={inputs.short_des} onChange={e => setInputs({...inputs, short_des : e.target.value})} className='form-control' ></textarea>
        </FormGroup>

        
        <FormGroup className='my-3'>
            <FormLabel>Rating</FormLabel>
            <FormControl type='text' value={inputs.rating} onChange={e => setInputs({...inputs, rating : e.target.value})} placeholder='Rating' />
        </FormGroup>

        <FormGroup className='my-3'>
            <FormLabel>Catagory</FormLabel>
            <select className='form-control' value={inputs.catagoryid} onChange={e => setInputs({...inputs, catagoryid : e.target.value})} >
                <option value="">--select--</option>
                {
                    cats.map( data => 
                    <option value={data.id}>{data.name}</option>
                    )
                }
            </select>

        </FormGroup>

        <FormGroup className='my-3'>
            <FormLabel>Tag</FormLabel>
            <select className='form-control' value={inputs.tagid} onChange={e => setInputs({...inputs, tagid : e.target.value})}>
                <option value="">--select--</option>
                {
                    tags.map( data => 
                    <option value={data.id}>{data.name}</option>
                    )
                }
                </select>
        </FormGroup>

        <FormGroup className='my-3'>
            <FormLabel>Photo</FormLabel>
            <FormControl type='text' value={inputs.photo} onChange={e => setInputs({...inputs, photo : e.target.value})} placeholder='photo' />
        </FormGroup>

        <FormGroup className='my-3'>
         <Button type='submit' className='btn btn-primary'>add now</Button>
         </FormGroup>

    </Form>
  
   
 
   
    
    </>
  )
}

export default ProductAdd;