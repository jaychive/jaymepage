import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <>
      <section id="main" className="position-relative ">
        <div className="mainMenu pt-2">
          <Link to="/about"><p className="pretendard font-light">&lt;ABOUT /&gt;</p></Link>
          <img className="d-block w-4 mx-auto py-3" src="/img/sub/sub02.svg" alt="" />
          <Link to="/interest"><p className="pretendard font-light">&lt;INTEREST /&gt;</p></Link>
          <img className="d-block w-4 mx-auto py-3" src="/img/sub/sub02.svg" alt="" />
          <Link to="/portfolio"><p className="pretendard font-light">&lt;PORTFOLIO /&gt;</p></Link>
          <img className="d-block w-4 mx-auto py-3" src="/img/sub/sub02.svg" alt="" />
          <Link to="/contact"><p className="pretendard font-light">&lt;CONTACT /&gt;</p></Link>
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
          <div className="maindrawing position-absolute">
            <img src="/img/pic/draw1.svg" alt="drawing" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;