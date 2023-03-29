import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { TfiClose, TfiArrowRight } from "react-icons/tfi";

function Hobby(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="hobbyline text-left">
        <button className={"w-full py-2 border-t border-black " + props.border} onClick={() => { setIsActive(isActive => !isActive) }}>
          <div className="flex justify-between items-center px-2">
            <strong className={"hobTitle " + props.cls}>{props.name}</strong>
            {isActive ? <TfiClose /> : <TfiArrowRight style={{ transform: "rotate(-45deg)" }} />}
          </div>
          <div className="px-1 hobbyContent">
            <div className={(isActive ? 'block' : 'hidden') + " py-2 flex flex-col justify-center items-center px-2"}>
              <p>{props.desc && props.desc}</p>
              {
                props.name === "EDITING VIDEOS" ?
                  <iframe title="editing videos" style={{ height: "77vh" }} src={props.link} frameBorder="0" allowtransparency="true"></iframe>
                  : props.name === "Photography" ?
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
                      centeredSlides={true}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: true,
                      }}
                      loop={true}
                      modules={[Autoplay]}
                      className="mySwiper container mx-auto px-4 mx-auto"
                    >
                      {
                        props.link && props.link.map((value, index) => {
                          return (
                            <SwiperSlide><img className="block mx-0" src={value} alt={'photography'+index} key={'ph'+index} /></SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                    : props.name === "DRAWING" ?
                      props.link && props.link.map((value, index) => {
                        return (
                          <img src={value} alt={'drawing' + index} key={'dw'+index} />
                        )
                      })
                      : <img src={props.link} className="w-50" alt="dancing" />
              }
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Hobby;