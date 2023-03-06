import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";


function Menu(props) {
  const closeClick = ()=>{
    if(props.active){
      document.querySelector('#header').classList.remove('down')
      document.querySelector('#header').style.mixBlendMode = 'difference';
    }
  }
  return (
    <>
      <section id="menu">
        <div className="d-flex flex-column justify-content-center position-relative pt-20">
          <Link to="/about" onClick={closeClick} className="text-white py-4"><p className="lexend text-2xl leading-none font-light">&lt;ABOUT /&gt;</p></Link>
          <Link to="/interest" onClick={closeClick} className="text-white py-4"><p className="lexend text-2xl leading-none font-light">&lt;INTEREST /&gt;</p></Link>
          <Link to="/portfolio" onClick={closeClick} className="text-white py-4"><p className="lexend text-2xl leading-none font-light">&lt;PORTFOLIO /&gt;</p></Link>
          <Link to="/contact" onClick={closeClick} className="text-white py-4"><p className="lexend text-2xl leading-none font-light">&lt;CONTACT /&gt;</p></Link>
        </div>
        <div className="closeMenu position-absolute text-white">
          <button onClick={closeClick}><TfiClose /></button>
        </div>
      </section>
    </>
  );
}

export default Menu;