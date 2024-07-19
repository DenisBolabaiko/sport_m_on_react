import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Card from './components/card';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Contact from './pages/contact';
import Categories from './components/categories';
import MyLoader from './components/loader';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AboutUsPage from './pages/Aboutus';
import CartPage from './pages/CartPage';
import axios from 'axios';


function App() {
  //const cartItems = useSelector(state => state.cart.items);
  const searchValue = useSelector(state => state.search.searchValue);
  const categoryId = useSelector(state => state.filter.categoryId);
  const[isLoading, setIsLoading] = useState(false);
  
  useEffect(()=>{
        setIsLoading(true)
        const category = categoryId != ''? `&category=${categoryId}`:''
        const search = searchValue ? `&search=${searchValue}`:'';
        axios.get(`https://664907174032b1331bed18c0.mockapi.io/cards?${category}${search}`)
            .then(res => {SetCard(res.data)
              setIsLoading(false) 
            })
            
            .catch(error => {
              console.log(error);
              SetCard([]);
              setIsLoading(false);
            })
    },[categoryId, searchValue])

const [card, SetCard] = useState([]);
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/shop' element={
        <>
          <Categories/>
          <div class="card-grid">
            {isLoading ? [...new Array(20)].map(()=><MyLoader/>):card.map(obj =><Card key={obj.id} {...obj}/>)}
          </div>
          </>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={
          <Homepage/>
        }/>
          
          

        </Routes>
      
    </div>
    
  );
}

export default App;
