import React, { useEffect } from 'react';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiJquery, SiBootstrap, SiTailwindcss, SiReact, SiSass, SiFigma, SiGithub, SiNotion } from "react-icons/si";

function Gauge(props) {

  return (
    <>
      <div className="gauge flex items-center justify-between px-1">
        <div className="grid-cols-2">
          {props.icon ? props.icon : <p className="lexend text-xl font-bold">{props.name}</p>}
          <span className="sr-only">{props.name}</span>
        </div>
        <div className="gug flex items-center grid-cols-10">
          <div className="gaugeline ms-2 h-3 w-52 grid-cols-8">
            <div className="ggpercent h-3" style={{width : `${props.per}%`}}></div>
          </div>
          <p className="pretendard font-light pl-2.5 grid-cols-4">{props.per}%</p>
        </div>
        
        {/* 리액트 태그 스타일에도 props 낄 수 있는지 검색 */}
      </div>
    </>
  );
}

export default Gauge;