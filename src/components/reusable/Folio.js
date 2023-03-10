import React from 'react';
import Btn from './Btn';

function Folio(props) {
  return (
    <>
      <div className="port py-4">
        <div className="folioPic">
          {/* swiper 넣을지 아님 img 하나만 넣을지 고민 중 */}
          <img src="/img/pic/about2.jpg" alt="" />
        </div>
        <div className="folioExp">
          <div>
            <div className="fdesc">
              <h4 className="lexend font-medium text-xl">BRING GREEN EVENT PAGE</h4>
              <strong className="hashtag pretendard font-bold text-success text-lg">#2030여성 #수부지 #스킨유목민</strong>
              <div className="detail">
                <p className="d-block pretendard font-medium text-secondary text-sm">브링그린의 신제품을 기획하고
                  그 이미지에 맞는 광고 페이지를 기획 및 제작하였습니다.
                  빠른 유지/보수 그리고 성능 최적화를 위해
                  데이터 바인딩 하였습니다.</p>
              </div>
              {/* <p className="data"></p> */}
              <strong className="period lexend font-normal">(2022) 1 WEEK</strong>
            </div>
            <div className="flangs">
              <div className="stack">
                <h5 className="lexend font-normal">STACK</h5>
                <ul className="langimg d-flex justify-content-center align-items-center">
                  {
                    props.link.map((value, index) => {
                      return(
                        <li key={"stackimg"+index}><img src={value} alt="" className="mr-2" /></li>
                      )
                    })
                  }
                </ul>
                <div className="fgauge d-flex align-items-center justify-content-center flex-column">
                  <div className="fline h-2 w-64 bg-slate-200">
                    <ul className="d-flex">
                      <li className="h-2 bg-slate-900" style={{ width: `${props.per[0]}%` }}></li>
                      <li className="h-2 bg-slate-500" style={{ width: `${props.per[1]}%` }}></li>
                    </ul>
                  </div>
                  <ul className="fper d-flex">
                    <li className="d-flex align-items-center me-3">
                      <div className="bg-slate-900 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">HTML : {props.per[0]}%</p>
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <div className="bg-slate-500 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">CSS : {props.per[1]}%</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="bg-slate-200 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">JS : {props.per[2]}%</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="fpart">
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
            </div> */}
            </div>
          </div>
          
          <ul className="fbtn">
            {
              props.btn.map((value, index) => {
                return (
                  <li key={"foliobtn" + index}><Btn title={"VIEW " + value.site} link={value.link}  /></li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </>
  );
}

export default Folio;