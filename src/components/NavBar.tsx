import { Link } from "react-router-dom";

function toggleNavbar() {
  document.getElementById("navbar-content")?.classList.toggle("active");
}

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>apocrypha.css</h1>
      <button type="button" onClick={toggleNavbar}>
        <img
          className="img-filter"
          src="https://cdn.snows.world/images/icons/hamburger.svg"
          alt="Hamburger icon"
        />
      </button>
      <hr />
      <ul id="navbar-content">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
}
