import Link from "next/link";

const SinglePost = ({ _id, product_name, imageUrl, desc, alt }) => (
  <div>
    <div key={_id} className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <img
          src={imageUrl}
          alt={alt}
          style={{ objectFit: "cover", height: "250px" }}
        />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{product_name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);

export default SinglePost;
