import React from 'react';

function Btn(props) {
  return (
    <div>
      {
        props.link ?
          <button className="squareBtn border border-dark py-3 px-2" onClick={() => { window.open(`${props.link}`) }}>{props.title}</button> :
          <button className="squareBtn border border-dark py-3 px-2">{props.title}</button>
      }
    </div>
  );
}

export default Btn;