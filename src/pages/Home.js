import Main from "../components/layout/Main/Main";
import CategoryLink from "../components/CategoryLink";
import Landing from "../components/layout/Landing";

const Home = () => {
  return (
    <Main>
      <Landing />
      <h2 className="text-center">Shop By Category</h2>
      <CategoryLink />
    </Main>
  );
};

export default Home;
