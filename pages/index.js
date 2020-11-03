import Layout from "../components/Layout";
import Slideshow from "../components/parts/Slideshow";
import BatchPosts from "../components/product/Batch";

import Posts from "./Posts.json";

function Home() {
  return (
    <Layout title="Home">
      <Slideshow />
      <BatchPosts data={Posts.posts} />
    </Layout>
  );
}

export default Home;
