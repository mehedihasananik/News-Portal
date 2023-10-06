import { Outlet } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";
import Category from "./Category/Category";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import HomeSocial from "./HomeSocial/HomeSocial";

const Home = () => {
  return (
    <div>
      <SingleCategory />
    </div>
  );
};

export default Home;
