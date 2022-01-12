import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/MainPage/Footer/Footer";
import MainHeader from "../../components/MainPage/Header/MainHeader";
import SectionThree from "../../components/MainPage/SectionThree/SectionThree";
import SectionTwo from "../../components/MainPage/SectionTwo/SectionTwo";
import AllCardsPage from "../AllCardsPage";
import { cardsContext } from "../../contexts/cardsContext";

const MainPage = () => {



  return (
    <div>
      <MainHeader />



      <SectionTwo />
      <SectionThree />
      <Footer />
    </div >
  );
};

export default MainPage;
