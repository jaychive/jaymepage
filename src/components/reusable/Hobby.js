import React from 'react';

function Hobby(props) {
  return (
    <>
      <div className="hobbyline">
        <strong className="hobTitle">{props.name}</strong>
        {/* <img src="" alt="open" className="d-block"><button>onClick="여기에 useState 들어있는 콜백함수 실행"</button></img> */}
        <div className="hobbyContent">
          {/* 그럼 여기에 useState 변수로 설명 넣어주기 */}
          <p>설명설명</p>
          {/* <img src="" alt="" /> */}
          {/* src안에다가 {useState 변수} */}
        </div>
      </div>
    </>
  );
}

export default Hobby;