import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Menu } from "../../assets";

function UserHead({ toggleMenu }) {
  const [isPhoneMode, setIsPhoneMode] = useState(false);

  const handler = (e) => {
    setIsPhoneMode(window.innerWidth < 450);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div className="user_head">
      <div className="title_head">
        {isPhoneMode && <Menu onClick={toggleMenu} />}
        <h2>Corona virus</h2>
      </div>
      <div className="user_otipns">
        <div className="box">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.01339 1.93994C5.80673 1.93994 4.01339 3.73327 4.01339 5.93994V7.86661C4.01339 8.27328 3.84006 8.89327 3.63339 9.23994L2.86673 10.5133C2.39339 11.2999 2.72006 12.1733 3.58673 12.4666C6.46006 13.4266 9.56006 13.4266 12.4334 12.4666C13.2401 12.1999 13.5934 11.2466 13.1534 10.5133L12.3867 9.23994C12.1867 8.89327 12.0134 8.27328 12.0134 7.86661V5.93994C12.0134 3.73994 10.2134 1.93994 8.01339 1.93994Z"
              stroke="#7178B2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M9.2467 2.13333C9.04003 2.07333 8.8267 2.02667 8.6067 2C7.9667 1.92 7.35336 1.96667 6.78003 2.13333C6.97336 1.64 7.45336 1.29333 8.01336 1.29333C8.57336 1.29333 9.05336 1.64 9.2467 2.13333Z"
              stroke="#7178B2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0133 12.7067C10.0133 13.8067 9.11331 14.7067 8.01331 14.7067C7.46664 14.7067 6.95997 14.48 6.59997 14.12C6.23997 13.76 6.01331 13.2533 6.01331 12.7067"
              stroke="#7178B2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div className="box">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99996 8.00004C9.84091 8.00004 11.3333 6.50766 11.3333 4.66671C11.3333 2.82576 9.84091 1.33337 7.99996 1.33337C6.15901 1.33337 4.66663 2.82576 4.66663 4.66671C4.66663 6.50766 6.15901 8.00004 7.99996 8.00004Z"
              stroke="#7178B2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7266 14.6667C13.7266 12.0867 11.16 10 7.99998 10C4.83998 10 2.27332 12.0867 2.27332 14.6667"
              stroke="#7178B2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="user_avatar">
          <img
            src="https://cdn.vox-cdn.com/thumbor/e7e8CIQyGPdtsp24SjPDlXmxe-Y=/0x0:1400x788/1400x933/filters:focal(588x282:812x506):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png"
            alt="any image"
          />
        </div>
      </div>
    </div>
  );
}

export default UserHead;
