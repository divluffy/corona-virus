import React, { useState } from "react";
import { Logo, Logout } from "../assets";
import routes from "../config/routes";

function Nav({ menu, toggleMenu }) {
  const [pathSelect, setPathSelect] = useState("info");
  const [top, setTop] = useState("180px");

  const onHandle = ({ name, i }) => {
    setPathSelect(name);
    setTop(`${i * 60}px`);
  };

  return (
    <>
      {menu && <div className="layout_menu" onClick={toggleMenu}></div>}
      <nav className={menu ? "active" : ""}>
        {/* logo > move to home */}
        <a href="#" className="logo">
          <Logo />
        </a>
        <ul className="routes">
          {/* there no paths to add */}
          {routes.map(({ name, icon }, i) => {
            return (
              <li
                key={name}
                onClick={() => onHandle({ name, i })}
                className={`box_route ${pathSelect === name && "active"}`}
              >
                <a href="#">{icon}</a>
              </li>
            );
          })}

          {/* active link effect */}
          <div style={{ top }} className="active_bar">
            <div className="border_bactive"></div>
          </div>
        </ul>

        {/* for logout user */}
        <div className="logout">
          <Logout />
        </div>
      </nav>
    </>
  );
}

export default Nav;
