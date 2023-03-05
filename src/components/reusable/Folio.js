import React from 'react';

function Folio(props) {
  return (
    <>
      <div className="port">
        <div className="folioPic">
          {/* swiper 넣을지 아님 img 하나만 넣을지 고민 중 */}
        </div>
        <div className="folioExp">
          <div className="fdesc">
            <h4>BRING GREEN EVENT PAGE 테이블에서 데려올거...</h4>
            <p className="hashtag"></p>
            <div className="detail">
              <span className="d-block"></span>
              <span className="d-block"></span>
            </div>
            <p className="data"></p>
            <strong className="period"></strong>
          </div>
          <div className="flangs">
            <div className="tool">
              <h5>TOOL</h5>
              <ul className="langimg d-flex">
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
              </ul>
            </div>
            <div className="stack">
              <h5>STACK</h5>
              <ul className="langimg d-flex">
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
                <li><img src="" alt="" className="" /></li>
              </ul>
              <div className="fgauge">
                <div className="fline"></div>
                <ul className="fper">
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fpart">
              <h5>PARTICIPATION</h5>
              <div className="fgauge">
                <div className="fline"></div>
                <ul className="fper">
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="fbtn">
            <li><a href="http://" target="_blank" rel="noopener noreferrer">VIEW</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">VIEW</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">VIEW</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Folio;