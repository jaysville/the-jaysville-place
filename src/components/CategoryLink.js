import categoryList from "../categoryList";

const CategoryLink = () => {
  return (
    <section className=" mb-3">
      <div
        className="d-flex justify-content-around flex-wrap"
        id="categoryLinkContainer"
      >
        {categoryList.map(({ name, img, id, query }) => {
          return (
            <a href={`/products/category/${query}`} key={id}>
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="categoryLink"
              >
                <div className="categoryLinkDetails">
                  <h3>
                    <b>{name}</b>
                  </h3>
                  <p>SHOP NOW!</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryLink;
