import Link from "next/link";

export default function BatchPosts({ data }) {
  return (
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <h3>Hot Products</h3>
        <div className="uk-grid-medium uk-child-width-1-4" uk-grid="true">
          {data.map((item, _id) => {
            return (
              <div>
                <div key={_id} className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img src={item.imageUrl} alt={item.alt} />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">{item.product_name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
