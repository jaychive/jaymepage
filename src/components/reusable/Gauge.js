import React, { useEffect } from 'react';

function Gauge(props) {

  return (
    <>
      <div className="gauge d-flex align-items-center justify-content-around">
        <div className="gug d-flex align-items-center">
          <p>{props.name}</p>
          <div className="gaugeline ms-2 h-4 w-52 bg-secondary">
            <div className="ggpercent h-4 bg-danger" style={{width : `${props.per}%`}}></div>
          </div>
        </div>
        <p>{props.per}%</p>
        {/* 리액트 태그 스타일에도 props 낄 수 있는지 검색 */}
      </div>
    </>
  );
}

export default Gauge;