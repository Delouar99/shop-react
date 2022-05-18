import React, {  useState } from 'react'
import { Button, Form, FormControl, FormGroup, Table } from 'react-bootstrap';
import axios from 'axios';
import './Admin.css'

const Catagory = ({cats, addSlug}) => {

//add cat form
const [addForm, setAddForm] = useState(false);
const [editForm, setEditForm] = useState(false);


//input cat data
const [cat, setCat] = useState({

  name : '',
  id : ''
});

 




//handle add form
const handleAddForm = () => {
  setAddForm(true);
  setEditForm(false);
  setCat({
    name : '',
    id : ''
  })
}



//handle Cat Form Submit 
const handleCatFormSubmit = (e) => {
  e.preventDefault();
  
  let slug = addSlug(cat.name);
  axios.post('http://localhost:5080/catagory', {
    id : '',
    name : cat.name,
    slug : slug
  }).then( res => {
    setAddForm(false);
    setCat({
      id : '',
    name : '',
    slug : ''
    })
  })

 
}

// handle click delete

const handleClickDelete = (id) =>{
  axios.delete('http://localhost:5080/catagory/' + id);
}


//handleEDitform data

const handleClickEdit = (id) =>{
  setAddForm(false);
  setEditForm(true);
  axios.get('http://localhost:5080/catagory/' + id).then(res => {
    setCat({
      name : res.data.name,
      id : res.data.name
    })
  })
}

//update cat

const handleCatUpdate = (e) =>{
  e.preventDefault();

  let slug = addSlug(cat.name);

  axios.patch('http://localhost:5080/catagory/' + cat.name, {
    name : cat.name,
    slug : slug,
  }).then(res => {
   setCat({
     name :'',
     id : ''
   });
   setEditForm(false);
 })
  
}






  return (
    <>
    <h5>Catagory</h5>
    <button onClick={handleAddForm} className='btn btn-primary btn-sm'>Add New Catagory</button>

  
   
     <Table className='table table-striped'>
       <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
       </thead>
       <tbody>

         {
           cats.map( (data, index) => 
           <tr>

              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.slug}</td>
              <td >
              <Button onClick={ () => handleClickEdit(data.id)} className='btn btn-primary btn-sm'>Edit</Button>
              <Button onClick={ () => handleClickDelete(data.id)} className='btn btn-danger btn-sm'>Delete</Button>
                
              </td>
            </tr>
           
           
           
           )
         }
            
       </tbody>
     </Table>

     {
      addForm &&
      <>
       <hr />

          <Form onSubmit={handleCatFormSubmit}>
            <FormGroup className='my-3'>
              <FormControl type='text' value={cat.name} onChange={e => setCat({...cat, name: e.target.value})} placeholder='catagory name'/>
            </FormGroup>
            <FormGroup className='my-3'>
              <Button type='submit' className='btn btn-success btn-sm'>add</Button>
            </FormGroup>
          </Form>


<hr />
      
      </>
    }


{
      editForm &&
      <>
       <hr />

          <Form onSubmit={handleCatUpdate}>
            <FormGroup className='my-3'>
              <FormControl type='text' value={cat.name} onChange={e => setCat({...cat, name: e.target.value})} placeholder='catagory name'/>
            </FormGroup>
            <FormGroup className='my-3'>
              <Button type='submit' className='btn btn-success btn-sm'>add</Button>
            </FormGroup>
          </Form>


<hr />
      
      </>
    }
    
    
    </>
  )
}

export default Catagory;