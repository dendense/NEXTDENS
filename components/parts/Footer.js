import React from "react";
import Link from "next/link";

const Footer = () => (
  <div className="uk-section uk-section-secondary uk-light">
    <div className="uk-container">
      <h3>Related Links</h3>
      <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
        <div>
          <ul class="uk-list uk-list-large">
            <li>
              <Link href="https://facebook.com/">FACEBOOK</Link>
            </li>
            <li>INSTAGRAM</li>
            <li>GITHUB</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
