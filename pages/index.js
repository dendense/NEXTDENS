import Button from "../components/elements/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout title="Home">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slideshow="ratio: 7:3; animation: push"
      >
        <ul className="uk-slideshow-items">
          <li>
            <img src="images/photo.jpg" alt="" uk-cover="true" />
          </li>
          <li>
            <img src="images/dark.jpg" alt="" uk-cover="true" />
          </li>
          <li>
            <img src="images/light.jpg" alt="" uk-cover="true" />
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        ></a>
      </div>
    </Layout>
  );
}

export default Home;
