import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header(props) {
  return (
    <>
      <section id="header" className="fullcontainer">
        <div className="d-flex justify-content-between align-items-center fixed-top">
          <p>COMMUNICATE</p>
          <div className="menu d-flex align-items-center">
            <img src="" alt="menu button" class="d-block"></img>
            {/* 위에 메뉴버튼 link to 쓰면서 toggle로 navigate(-1)시켜야됨 */}
            <Link to="/"><h1><img src="" alt="logo" class="d-block"></img></h1></Link>
          </div>
          <p>FRONT-END DEVELOPER</p>
        </div>
      </section>
    </>
  );
}

export default Header;