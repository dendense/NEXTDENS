import Link from "next/link";

const Nav = () => (
  <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
    {/* Navbar Expand */}
    <div className="uk-navbar-left uk-visible@m">
      <a className="uk-navbar-item uk-logo" href="/">
        EMACO
      </a>
      <ul className="uk-navbar-nav">
        <li className="uk-active">
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
