import React, { useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Addtag = () => {


    //add tag useeffect
     const [tag, setTag] = useState();

     //add slug

     const addSlug = (data) => {
        let arr = data.split(' ')
        return arr.join('-').toLowerCase();
    }

    //from submit
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        let slugs = addSlug(tag);
        axios.post('http://localhost:5080/tags',{
          id : '',
          name : tag,
          slug : slugs,
        
        }).then(res => {
            setTag('');
            
        })
    }
 


  

  return (
   <>
   <h2>All tags</h2>
    <Link className='btn btn-primary btn-sm' to='/admin/tag'>all tag</Link>

    <Form onSubmit={handleFormSubmit}>
       <FormGroup className='my-3'>
           <FormControl type='text' value={tag} onChange={e => setTag(e.target.value)} />
       </FormGroup>
       <FormGroup className='my-3'>
           <button type='submit' className='btn-primary btn-sm'>add</button>
       </FormGroup>
    </Form>
   
   </>
  )
}

export default Addtag;