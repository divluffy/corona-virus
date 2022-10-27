import React from "react";
import GlobalStats from "./comon/GlobalStats";
import UserHead from "./comon/UserHead";

function Main({ toggleMenu }) {
  return (
    <main>
      <UserHead toggleMenu={toggleMenu} />
      <GlobalStats />
    </main>
  );
}

export default Main;
