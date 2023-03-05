import React from 'react';

function Hobby(props) {
  return (
    <>
      <div className="hobbyline">
        <strong className="hobTitle">{props.name}</strong>
        <img src="" alt="open" className="d-block"><a href="" onClick="여기에 useState 들어있는 콜백함수 실행"></a></img>
        <div className="hobbyContent">
          {/* 그럼 여기에 useState 변수 넣어주기 */}
          <p></p>
          <img src="여기다가 {useState 변수}" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hobby;