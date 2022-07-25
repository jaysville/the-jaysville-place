const Landing = () => {
  return (
    <section id="landing">
      <div className="row">
        <div className="col-xl-5 mb-3">
          <img
            id="landingImg"
            className="img-fluid"
            src="https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031__480.jpg"
            alt=""
          />
        </div>
        <div className="col-xl-7 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center p-3 animate__animated animate__fadeInDown">
            <h1 className="mb-5 display-3">
              Discover products for a life well lived.
            </h1>
            <h3 className="mb-5 display-5">$200 + VALUE FOR $49.99</h3>
            <article className="mb-5">
              Premium quality products delivered 4x per year. Free Shipping.
            </article>
          </div>
          <a
            href="#categoryLinkContainer"
            className="display-3 animate__animated animate__fadeIn"
          >
            <button className="shopbtn">SHOP NOW!</button>
          </a>
        </div>
      </div>
      <hr />
    </section>
  );
};
export default Landing;
