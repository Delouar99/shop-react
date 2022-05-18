import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Products = () => {
 
  return (
    <>
    <h5>Products</h5>
   <Link to='/admin/add-product' className='btn btn-primary btn-sm'>Add New Product </Link>
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
            <tr>
              <td>01</td>
              <td>men</td>
              <td>men</td>
              <td className='icon'>
                <ul>
                  <li><a  className='btn btn-sm btn-primary' href="#"><box-icon name='low-vision'></box-icon></a></li>&nbsp;
                  <li><a className='btn btn-sm btn-success' href="#"><box-icon name='edit'></box-icon></a></li>&nbsp;
                  <li><a className='btn btn-sm btn-danger' href="#"><box-icon name='trash'></box-icon></a></li>
                </ul>
                
              </td>
            </tr>
       </tbody>
     </Table>
    
    </>
  )
}

export default Products;