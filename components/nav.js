import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <Link href="/">NEXTDENS</Link>
        </li>
        <li>
          <Link href="/bio">BIO</Link>
        </li>
        <li>
          <Link href="/project">PROJECT</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
