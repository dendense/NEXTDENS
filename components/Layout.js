import Head from "next/head";
import PropTypes from "prop-types";

import Nav from "./parts/Nav";
import Footer from "./parts/Footer";

const Layout = ({ title, children }) => (
  <div id="pageContainer">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="css/uikit.min.css" />
      {/* Google Analytics & Webmastertools Here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
                <code snippet goes here>
              `,
        }}
      />
      {/* UIKit JS */}
      <script src="js/uikit.js"></script>
      <script src="js/uikit-icons.js"></script>
    </Head>
    <Nav />
    <div className="uk-container" id="contentWrap">
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
