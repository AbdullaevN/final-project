import React from "react";
import Footer from "../../components/MainPage/Footer/Footer";
import MainHeader from "../../components/MainPage/Header/MainHeader";
import SectionThree from "../../components/MainPage/SectionThree/SectionThree";
import SectionTwo from "../../components/MainPage/SectionTwo/SectionTwo";

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};

export default MainPage;
