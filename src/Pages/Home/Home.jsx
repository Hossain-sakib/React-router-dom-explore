import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="w-6xl mx-auto">
        <Navbar></Navbar>
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
