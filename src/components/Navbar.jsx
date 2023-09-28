import { useState } from "react";
import "./Navbar.css";
import { Plus, Home, List, Info, BookOpen, Phone } from "react-feather";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleFunc = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <>
      <nav className={active ? "active" : ""}>
        <button onClick={toggleFunc} className="toggle">
          <Plus />
        </button>
        <ul>
          <li style={{ "--i": 0 }}>
            <a href="#home" title="Home">
              <Home />
            </a>
          </li>
          <li style={{ "--i": 1 }}>
            <a href="#about" title="About">
              <Info />
            </a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="#skill" title="Skill">
              <BookOpen />
            </a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href="#project" title="Project">
              <List />
            </a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="#contact" title="Contact">
              <Phone />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
