import React from 'react'
import { Link } from 'react-router-dom';
import product from '../..asects/images/shop/1.jpg'
import Sideber from '../Partials/Sideber';
import './Shop.css';
const Shop = ({ products, addSlug}) => {
  
  return (
    <>
    
    <section>

      <div className="container">
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">

          <Sideber/>
          </div>
          <div className="col-md-9">
          
            <div className="container-fluid">
              <div className="row">

              {

                products.map( data => 

                  <div className="col-md-4 col-sm-6">
                  <div className="shop-product">
                    
                    <div className="product-thumb">
                      <Link  to={`/shop/${data.slug}`}>
                        <img src={data.photo} alt=""/>
                      </Link>
                      <div className="product-overlay"><a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                      </div>
                    </div>

                    <div className="product-info">
                      <h4 className="upper"><a href="#">{data.name}</a></h4>

                    {
                      data.sell_price === '' ?
                      <span>{data.regullar_price}BDT</span>
                      :
                      <>

                       <span style={{textDecoration : 'line-through', marginRight: '8px'}}>{data.regullar_price}BDT</span>
                      <span style={{color : 'red'}}>{data.sell_price}BDT</span>

                      </>
                    }
                     
                      

                      <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                  )
              }

                
              
           
           
             
              
              
              
              </div>
              
              <ul className="pagination">
                <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left"></i></span></a>
                </li>
                <li className="active"><a href="#">1</a>
                </li>
                <li><a href="#">2</a>
                </li>
                <li><a href="#">3</a>
                </li>
                <li><a href="#">4</a>
                </li>
                <li><a href="#">5</a>
                </li>
                <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right"></i></span></a>
                </li>
              </ul> 
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  

    
    </>
  )
}

export default Shop;