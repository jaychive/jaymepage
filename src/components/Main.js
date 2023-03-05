import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <>
      <section id="main" className="position-relative fullcontainer">
        <div className="mainMenu">
          <Link to="/about"><p>&gt;ABOUT /&gt;</p></Link>
          <img className="d-block" src="" alt="" />
          <Link to="/interest"><p>&gt;INTEREST /&gt;</p></Link>
          <img className="d-block" src="" alt="" />
          <Link to="/portfolio"><p>&gt;PORTFOLIO /&gt;</p></Link>
          <img className="d-block" src="" alt="" />
          <Link to="/contact"><p>&gt;CONTACT /&gt;</p></Link>
        </div>
        <div className="intro">
          <div className="introText">
            <div className="introKr d-flex justify-content-between align-items-center">
              <p className="ikr"></p>
              <p className="ikr"></p>
            </div>
            <div className="introEn d-flex justify-content-between align-items-center">
              <p className="ien"></p>
              <p className="ien"></p>
            </div>
          </div>
          <div className="position-absolute">
            <img src="" alt="drawing" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;