import { useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const navItems = ["Home", "Films", "Showtimes", "Add movie"];
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <aside className="sideNavbar">
      <div className="navTitle">Anex Bios</div>

      <nav className="navMenu" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={`navItem ${selectedItem === item ? "active" : ""}`}
            type="button"
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
