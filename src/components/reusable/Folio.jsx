import React from 'react';
import Btn from './Btn';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiJquery, SiBootstrap, SiTailwindcss, SiReact, SiSass, SiFigma, SiGithub, SiNotion } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

function Folio(props) {

  const folioPages = [...(props.db.pf_github.replace(/['"]/g, '')), ...(props.db.pf_figma.replace(/['"]/g, '')), ...(props.db.pf_notion.replace(/['"]/g, '')), ...(props.db.pf_site.replace(/['"]/g, ''))]

  const per = props.db.per;
  const stack = props.db.stack;

  console.log(props.db);
  
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
              <h4 className="lexend font-medium text-xl">{props.db.pf_title}</h4>
              <strong className="hashtag pretendard font-bold text-success text-lg">{props.db.pf_hashtag}</strong>
              <div className="detail">
                <p className="block pretendard font-medium text-secondary text-sm">{props.db.pf_description}</p>
              </div>
              {/* <p className="data"></p> */}
              <strong className="period lexend font-normal">({props.db.pf_year}) {props.db.pf_period}</strong>
            </div>
            <div className="flangs">
              <div className="stack">
                <h5 className="lexend font-normal">STACK</h5>
                <ul className="langimg flex justify-center items-center">
                  {
                    props.db && props.db.stackImg.map((value, index) => {
                      return (
                        <li key={"stackimg" + index}>{value.replace(/['"]/g, '')}<span className="sr-only">{stack[index]}</span></li>
                      )
                    })
                  }
                </ul>
                <div className="fgauge flex items-center justify-center flex-col">
                  <div className="fline h-2 w-64 bg-slate-200">
                    <ul className="flex">
                      <li className="h-2 bg-slate-900" style={{ width: `${per[0]}%` }}></li>
                      <li className="h-2 bg-slate-500" style={{ width: `${per[1]}%` }}></li>
                    </ul>
                  </div>
                  <ul className="fper flex">
                    <li className="flex items-center me-3">
                      <div className="bg-slate-900 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">HTML : {per[0]}%</p>
                    </li>
                    <li className="flex items-center me-3">
                      <div className="bg-slate-500 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">CSS : {per[1]}%</p>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-slate-200 rounded h-2 w-2 me-1"></div>
                      <p className="lexend font-light text-sm">JS : {per[2]}%</p>
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
              folioPages && folioPages.map((value, index) => {
                return (
                  <li key={"foliobtn" + index}><a href={value[0].link}>{value[0].icon}<span className="sr-only">{value[0].name}</span></a></li>
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