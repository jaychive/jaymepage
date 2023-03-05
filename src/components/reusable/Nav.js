import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Nav(props) {
  return (
    <>
      <Link>
        <section id="nav">
          <div className="wholedownmenu">
            {/* 메뉴 버튼 클릭하면 down 클래스 들어가서 Menu 컴포넌트가 내려온다 */}
            <Menu></Menu>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>COMMUNICATE</p>
            <div className="menu d-flex align-items-center">
              <img src="" alt="menu button" class="d-block"><a href=""></a></img>
              <img src="" alt="logo" class="d-block"><a href=""></a></img>
            </div>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </section>
      </Link>
    </>
  );
}

export default Nav;