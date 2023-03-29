import './App.css';
  import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Interest from './components/Interest';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Form from './components/Form';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 


function App() {
  const location = useLocation();

  // const [color, setColor] = useState('#F7FEFF')

  // const bgColor = ()=>{
  //   location.pathname === "/contact/me"? setColor('black') : setColor('#F7FEFF')
  // }
  // useEffect(()=>{
  //   bgColor();
  //   document.querySelector('body').style.backgroundColor = color
  // },[color])
  
  return (
    <div className="App fullcontainer">
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/interest' element={<Interest />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/contact/me' element={<Form />}></Route>
          <Route path='*' element={<NotFound /> }></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
