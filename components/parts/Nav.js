import Link from "next/link";

const Nav = () => (
  <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div className="uk-navbar-left">
      <a className="uk-navbar-item uk-logo" href="/">
        NEXTDENSE
      </a>
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <Link href="/bio">BIO</Link>
        </li>
        <li>
          <Link href="/project">PROJECT</Link>
        </li>
        <li>
          <Link href="/login">SIGN IN</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
