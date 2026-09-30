import "../css/navbar.css";
const Navbar = ({ activePage, setActivePage }) => {
  const navItems = ["Home", "Films", "Showtimes", "Add movie"];

  return (
    <aside className="sideNavbar">
      <div className="navTitle">Anex Bios</div>

      <nav className="navMenu" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={`navItem ${activePage === item ? "active" : ""}`}
            type="button"
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
