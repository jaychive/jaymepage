import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './reusable/Nav';


function Menu(props) {
  let navigate = useNavigate();
  return (
    <>
      <section id="menu">
        <div className="d-flex flex-column justify-content-center">
          <Link to="/about"><p>&gt;ABOUT /&gt;</p></Link>
          <Link to="/interest"><p>&gt;INTEREST /&gt;</p></Link>
          <Link to="/portfolio"><p>&gt;PORTFOLIO /&gt;</p></Link>
          <Link to="/contact"><p>&gt;CONTACT /&gt;</p></Link>
        </div>
        <div className="closeMenu">
          <button onClick={()=>{ navigate(-1); }}><img src="" alt="close menu"></img></button>
        </div>
      </section>
    </>
  );
}

export default Menu;