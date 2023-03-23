import React, { useEffect } from 'react';

function Gauge(props) {

  return (
    <>
      <div className="gauge d-flex align-items-center justify-content-between px-1">
        <p className="pretendard font-light break-all me-auto">{props.name}</p>
        <div className="gug d-flex align-items-center">
          <div className="gaugeline ms-2 h-3 w-52">
            <div className="ggpercent h-3" style={{width : `${props.per}%`}}></div>
          </div>
          <p className="pretendard font-light ps-2">{props.per}%</p>
        </div>
        
        {/* 리액트 태그 스타일에도 props 낄 수 있는지 검색 */}
      </div>
    </>
  );
}

export default Gauge;