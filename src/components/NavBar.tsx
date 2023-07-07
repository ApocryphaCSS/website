import { MutableRefObject, useRef } from "react";
import { Link } from "react-router-dom";

function toggleNavbar(ref: MutableRefObject<any>) {
  const styles = ref.current.style;
  if (styles.display == "hidden") {
    styles.display = "unset";
  } else {
    styles.display = "hidden";
  }
}

export default function NavBar() {
  const navbarRef = useRef(null);

  return (
    <nav className="navbar">
      <h1>apocrypha.css</h1>
      <button onClick={() => toggleNavbar(navbarRef)}>
        <img
          className="img-filter"
          src="https://cdn.snows.world/images/icons/hamburger.svg"
          alt="Hamburger icon"
        />
      </button>
      <hr />
      <ul ref={navbarRef}>
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
