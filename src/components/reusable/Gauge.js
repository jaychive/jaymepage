import React from 'react';

function Gauge(props) {
  return (
    <>
      <div className="gauge d-flex">
        <p>{props.name}</p>
        <div className="gug">
          <div className="gaugeline"></div>
          <p>{props.per}%</p>
        </div>
        {/* 리액트 태그 스타일에도 props 낄 수 있는지 검색 */}
      </div>
    </>
  );
}

export default Gauge;