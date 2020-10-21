import Link from "next/link";

import Button from "../elements/Button";

const Footer = () => (
  <div
    className="uk-section uk-section-secondary uk-light"
    id="footerContainer"
  >
    <div className="uk-container">
      <h3>Related Links</h3>
      <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
        <div>
          <ul className="uk-list uk-list-large">
            <li>
              <Link href="https://facebook.com/deniyanto123">
                <a className="uk-link-text" target="_blank">
                  FACEBOOK
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/deny_desu">
                <a className="uk-link-text" target="_blank">
                  INSTAGRAM
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/dendense">
                <a className="uk-link-text" target="_blank">
                  GITHUB
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            corrupti vero nemo recusandae exercitationem, voluptatum facere
            nihil rerum! Minima, laudantium aut.
          </p>
        </div>
        <div>
          <h3>Admin Panel</h3>
          <Button href="/login" isDefault>
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
