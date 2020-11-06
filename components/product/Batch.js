import Link from "next/link";
import SinglePost from "./Single";

export default function BatchPosts({ data }) {
  return (
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <h3>New Products</h3>
        <div className="uk-child-width-1-3@s" uk-grid="true">
          {data.map((item, _id) => {
            return (
              <div key={_id}>
                <SinglePost
                  _id={item._id}
                  product_name={item.product_name}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                  desc={item.desc}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
