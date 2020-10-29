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
      <ul className="uk-navbar-nav">
        <li>
          <Link href="/bio">RESPONSE</Link>
        </li>
        <li>
          <Link href="/project">PRODUCT</Link>
        </li>
        <li>
          <Link href="/login">CONTACT US</Link>
        </li>
      </ul>
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
