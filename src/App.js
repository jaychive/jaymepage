import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App fullcontainer">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
