import React, { useState } from 'react';
import { TfiClose, TfiArrowRight } from "react-icons/tfi";

function Hobby(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="hobbyline text-left">
        <button className={"w-100 py-2 border-t border-black " + props.border} onClick={() => { setIsActive(isActive => !isActive) }}>
          <div className="d-flex justify-content-between align-items-center px-2">
            <strong className={"hobTitle " + props.cls}>{props.name}</strong>
            {isActive ? <TfiClose /> : <TfiArrowRight style={{transform : "rotate(-45deg)"}} />}
          </div>
          <div className="px-1 hobbyContent">
            <div className={(isActive ? 'd-block' : 'd-none') + " py-2 d-flex justify-content-between align-items-start"}>
              <p>설명설명</p>
              <img src={props.link} className="w-50" alt="" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Hobby;