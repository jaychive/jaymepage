import React, { useState } from 'react';
import { TfiPlus, TfiClose } from "react-icons/tfi";

function Interview(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={"qa"+props.no}>
        <button className={"py-2 w-100 border-t border-black " + props.border} onClick={()=>{setIsActive(isActive=>!isActive)}}>
          <div className="d-flex justify-content-between align-items-center px-1">
            <p className="pretendard">질문내용</p>
            {isActive? <TfiClose />:<TfiPlus /> }
          </div>
          <div className={(isActive?'d-block':'d-none') + " px-1"}>
            <p className="pretendard">답변답변답변답변</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Interview;