import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import './Admin.css'
const Dashboard = () => {
  return (
   <section className='dash'>
     <Container className='my-3'>
         <Row>
             <Col md={3}>
                 <ul className='list-group'>
                     <li className='list-group-item'><Link to="/admin">Dashboard</Link></li>
                     <li className='list-group-item'><Link to="/admin/products">Products</Link></li>
                     <li className='list-group-item'><Link to="/admin/catagory">Catagoary</Link></li>
                     <li className='list-group-item'><Link to="/admin/tag">Tags</Link></li>
                     <li className='list-group-item'><a href="#">Logout</a></li>
                 </ul>
             </Col>
             <Col md={9}>

            <Outlet />

             </Col>
         </Row>
     </Container>



   </section>
  )
}

export default Dashboard;