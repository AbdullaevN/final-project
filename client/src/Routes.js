import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsContextProvider from "./contexts/cardsContext";
import RegistrationContextProvider from "./contexts/registrationContext";
import AllCardsPage from "./pages/AllCardsPage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/HomePage/MainPage";
import SignUp from "./pages/RegistrationPage/RegistrationPage";
import Navibar from "./components/MainPage/Navbar/Navibar";
import CommentPage from "./pages/comments/CommentPage";
import CommentContextProvider from "./contexts/CommentContext";
import DetailPage from "./pages/DetailPage.js/DetailPage";

const MyRoutes = () => {
  return (



    
    <RegistrationContextProvider>
      <CardsContextProvider>
      <CommentContextProvider>
        <BrowserRouter>
        <Navibar/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product" element={<AllCardsPage/>} />
            <Route path="/product/detail/:id" element={<DetailPage/>} />

            <Route path="/detail/:id" element={<EditPage />} />
            <Route path="/comment" element={<CommentPage />} />
          </Routes>
        </BrowserRouter>
    </CommentContextProvider>
      </CardsContextProvider>
    </RegistrationContextProvider>

  );
};

export default MyRoutes;
