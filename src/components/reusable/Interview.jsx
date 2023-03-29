import React, { useState } from 'react';
import { TfiPlus, TfiClose } from "react-icons/tfi";

function Interview(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={props.border + " qa border-t border-black " + props.no}>
        <button className={"py-2 w-full "} onClick={()=>{setIsActive(isActive=>!isActive)}}>
          <div className="flex justify-between items-center px-1">
            <p className="pretendard text-ellipsis">{props.q}</p>
            {isActive? <TfiClose />:<TfiPlus /> }
          </div>
          <div className={(isActive?'block':'hidden') + " px-1"}>
            <p className="pretendard">{props.a}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Interview;