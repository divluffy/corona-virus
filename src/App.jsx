import "./styles";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  // i can use others way to handle this, but i think its oky here
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="app">
      <Nav menu={menu} toggleMenu={toggleMenu} />
      <Main toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
