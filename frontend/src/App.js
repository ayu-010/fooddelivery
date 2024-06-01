import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/pages/Home/Home"
import Cart from "../src/pages/Cart/Cart"
import Placeorder from "../src/pages/Placeorder/Placeorder"


// import Add from './components/Admin/Pages/Add';
// import List from './components/Admin/Pages/List';
// import Orders from './components/Admin/Pages/Orders';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
function App() {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  
    <div className="App">
    <Navbar setShowLogin={setShowLogin}/>

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<Placeorder/>}></Route>


{/* admin wale route h ye  */}
      {/* <Route path='/add' element={<Add/>}></Route>
      <Route path='/list' element={<List/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route> */}
    </Routes>
    </div>
    <Footer></Footer>
  
    </>
  );
}

export default App;
