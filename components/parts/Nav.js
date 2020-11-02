import Link from "next/link";

const Nav = () => (
  <nav
    className="uk-navbar-container uk-margin navbar-wrapper"
    uk-navbar="mode: click"
  >
    {/* Navbar Collapse */}
    <div className="uk-navbar-left uk-hidden@s">
      <a className="uk-navbar-item uk-logo" href="/">
        EMACO
      </a>
    </div>
    <div className="uk-navbar-right uk-hidden@s">
      <div className="uk-navbar-left">
        <a
          className="uk-navbar-toggle"
          type="button"
          uk-toggle="target: #offcanvas-flip"
          href="#"
        >
          <span uk-navbar-toggle-icon="true"></span>
        </a>
      </div>
    </div>
    {/* Canvas */}
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>

        <h3>Title</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    {/* Navbar Expand */}
    <div className="uk-navbar-left uk-visible@s">
      <a className="uk-navbar-item uk-logo" href="/">
        EMACO
      </a>
      <ul className="uk-navbar-nav">
        <li>
          <Link href="/bio">ABOUT</Link>
        </li>
        <li>
          <Link href="/project">PRODUCT</Link>
        </li>
        <li>
          <Link href="/login">CONTACT US</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
