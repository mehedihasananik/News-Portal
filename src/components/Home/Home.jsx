import Category from "./Category/Category";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import HomeSocial from "./HomeSocial/HomeSocial";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center ">
        {" "}
        <Category />
        <HomeBlogs />
        <HomeSocial />
      </div>
    </div>
  );
};

export default Home;
