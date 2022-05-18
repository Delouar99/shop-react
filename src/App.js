import { useEffect, useState } from 'react';
import axios from 'axios';
import './Components/..asects/css/bundle.css'
import { Routes, Route} from 'react-router-dom';
import './Components/..asects/css/style.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductSingle from './Components/Pages/ProductSingle';
import Shop from './Components/Pages/Shop';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Admin/Dashboard';
import Catagory from './Components/Admin/Catagory';
import Tag from './Components/Admin/Tag';
import Products from './Components/Admin/Products';
import Desh from './Components/Admin/Desh';
import Addtag from './Components/Admin/Addtag';
import ProductAdd from './Components/Admin/ProductAdd';


function App() {

   //get tags
   const [tags, setTags] = useState([]);

   //get all cats
const [cats, setCats] = useState([]);

  //get all cats
const [products, setProducts] = useState([]);

//slug
const addSlug = (data) => {
  let arr = data.split(' ')
  return arr.join('-').toLowerCase();
}

// get data


   useEffect( () => {
     
   

    axios.get('http://localhost:5080/tags').then(res => {
      setTags(res.data.reverse());
    })

    axios.get('http://localhost:5080/catagory').then(res => {
      setCats(res.data.reverse());
    })

    axios.get('http://localhost:5080/products').then(res => {
      setProducts(res.data.reverse());
    })


  }, [ products, cats, tags ]);



  return (
   <>

 
  <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop  products={products} />}/>
      <Route path='/shop/:slug' element={<ProductSingle/>}/>
      <Route path='/admin' element={<Dashboard/>}>
      <Route path='/admin/desh' element={<Desh />}/>
      <Route path='/admin/catagory' element={<Catagory cats={cats}  addSlug={addSlug} />}/>
      <Route path='/admin/tag' element={<Tag tags={tags} addSlug={addSlug} />}/>
      <Route path='/admin/add-tag' element={<Addtag />}/>
      <Route path='/admin/products' element={<Products products={products} addSlug={addSlug} />}/>
      <Route path='/admin/add-product' element={<ProductAdd tags={tags} cats={cats} />} />

      </Route  >
    </Routes>
  <Footer />


  
   
   </>
  );
}

export default App;
