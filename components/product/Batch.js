import Link from "next/link";
import SinglePost from "./Single";

export default function BatchPosts({ data }) {
  return (
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <h3>Hot Products</h3>
        <div className="uk-grid-medium uk-child-width-1-4" uk-grid="true">
          {data.map((item, _id) => {
            return (
              <SinglePost
                _id={item._id}
                product_name={item.product_name}
                imageUrl={item.imageUrl}
                alt={item.alt}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
