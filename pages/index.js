import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/css/uikit.min.css"
      />

      {/* UIKit JS */}
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/js/uikit-icons.min.js"></script>
    </Head>

    <Nav />

    <div>
      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 className="uk-card-title">Default</h3>
        <p>
          Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
