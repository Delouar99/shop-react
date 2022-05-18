
import React, {  useState } from 'react'
import axios from 'axios';
import { Button, Form, FormControl, FormGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tag = ({tags, addSlug}) => {

 
  //edit tag
  const [tag, setTag] = useState('');

  //tag update form
  const [tagupdateform, setTagupdateform] = useState(false)

  //edit  element
  const handleclickEdit = (id) =>{
    setTagupdateform(true);
    axios.get('http://localhost:5080/tags/' + id).then(res => {
      setTag({
        ...tag,
         name : res.data.name,
         id : res.data.id
      });
    })
  }

  //handeldelet
  const handleclickdelete = (id) =>{
      axios.delete('http://localhost:5080/tags/' + id)
  }


  //handle update element

  const handleFromUpdate = (e) =>{
    e.preventDefault();

    let slug = addSlug(tag.name);

    axios.patch('http://localhost:5080/tags/' + tag.id,{
      name : tag.name,
      slug : slug
    }).then(res => {
      setTagupdateform(false);
    })
  }




  return (
    <>
    <h5>Tag</h5>
    <Link className='btn btn-primary btn-sm' to='/admin/add-tag'>Add New Tags</Link>
    <hr />
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
           tags.map((data, index ) => 
           
           <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.slug}</td>
              <td>
                <Button onClick={ () => handleclickEdit(data.id)} className='btn btn-sm btn-primary'>Edit</Button>
                <Button onClick={ () => handleclickdelete(data.id)} className='btn btn-sm btn-primary'>Delete</Button>
              </td>
            </tr>
           
           )
         }
            
       </tbody>
     </Table>


     {
       tagupdateform && 
       <>
          <hr />
     <Form onSubmit={handleFromUpdate}>
       <FormGroup className='my-3'>
           <FormControl type='text' placeholder='update' value={tag.name} onChange={e => setTag({...tag, name : e.target.value})} />
       </FormGroup>
       <FormGroup className='my-3'>
           <button type='submit' className='btn-primary btn-sm'>update</button>
       </FormGroup>
    </Form>

       </>
     }
     
    
    </>
  )
}

export default Tag;