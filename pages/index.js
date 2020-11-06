import Layout from "../components/Layout";
import Slideshow from "../components/parts/Slideshow";
import BatchPosts from "../components/product/Batch";
import MiniBanner from "../components/parts/MinBanner";

import Posts from "./Posts.json";

function Home() {
  return (
    <Layout title="Home">
      <Slideshow />
      <BatchPosts data={Posts.posts} />
      <MiniBanner data={Posts.banner} />
    </Layout>
  );
}

export default Home;
