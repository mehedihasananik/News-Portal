import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SubHeader from "../Sub-Header/SubHeader";
import Footer from "../Footer/Footer";
import Category from "../Home/Category/Category";
import HomeSocial from "../Home/HomeSocial/HomeSocial";
import SingleCategory from "../SingleCategory/SingleCategory";

const Layout = () => {
  return (
    <div>
      {" "}
      <div>
        <SubHeader />
        <Header />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center ">
          {" "}
          <Category />
          <Outlet />
          <HomeSocial />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
