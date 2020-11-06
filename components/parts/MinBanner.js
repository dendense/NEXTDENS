import Button from "../elements/Button";

const MiniBanner = ({ data }) => (
  <div className="uk-container" style={{ marginBottom: "4.2rem" }}>
    <div className="uk-child-width-1-2@s uk-light" uk-grid="true">
      {data.map((banner, _id) => {
        return (
          <div>
            <div className="uk-inline uk-light">
              <img src={banner.imageUrl} alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-position-center">
                <Button
                  href="/"
                  className="uk-button uk-button-default uk-button-large"
                  isDefault
                >
                  {banner.button}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default MiniBanner;
