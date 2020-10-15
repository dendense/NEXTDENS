import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Nav from "./parts/Nav";
import Footer from "./parts/Footer";

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/css/uikit.min.css"
      />

      {/* UIKit JS */}
      <script src="js/uikit.min.js"></script>
      <script src="js/uikit-icons.min.js"></script>
    </Head>
    <Nav />
    <div className="uk-container">{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
