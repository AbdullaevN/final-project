import axios from "axios";
import React, { useReducer, useState } from "react";
import $axios from "../axios";
import { API } from "../helpers/const";

export const cardsContext = React.createContext();
const INIT_STATE = {
  cards: null,
  cardToEdit: null,
  countOfProducts: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return { ...state, cards: action.payload };
    case "GET_PRODUCTS_TO_EDIT":
      return { ...state, cardToEdit: action.payload };
    case "GET_COUNT":
      return { ...state, countOfCards: action.payload };
    case "CLEAR_STATE":
      return { ...state, cardToEdit: action.payload };
    default:
      break;
  }
};

const CardsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addCards = async (cards) => {
    try {
      console.log(cards);
      await $axios.post("/product/create", cards);
      getCards();
    } catch (e) {
      console.log(e);
    }
  };
  const getCards = async (page = "1") => {
    try {
      let filter = window.location.search;
      let filter1 = window.location.search;
      if (filter) filter += `&page=${page}`;
      else filter += `?page=${page}`;

      const { data } = await $axios(`product/${filter}`);
      if (filter1) filter1 += `&limit=10000`;
      else filter1 += `?limit=10000`;
      const response = await $axios(`product/${filter1}`);
      dispatch({
        type: "GET_COUNT",
        payload: response.data.rows.length,
      });
      // console.log(data.rows);
      dispatch({
        type: "GET_CARDS",
        payload: data.rows,
      });
    } catch (error) {
      console.log(error);
      console.log("error ",error);
    }
  };

  const getProductsToEdit = async (id) => {
    try {
      const response = await $axios.get(`product/${id}`);
      let action = {
        type: "GET_PRODUCTS_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedProducts = async (editedProducts) => {
    try {
      await $axios.patch(`product/${editedProducts.id}`, editedProducts);
      getCards();
      clearState();
    } catch (e) {
      console.log(e);
    }
  };

  const clearState = () => {
    let action = {
      type: "CLEAR_STATE",
      payload: null,
    };
    dispatch(action);
  };

  const deleteCard = async (id) => {
    try {
      await $axios.delete("/product/" + id);
      getCards();
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <cardsContext.Provider
      value={{
        addCards,
        getCards,
        deleteCard,
        clearState,
        getProductsToEdit,
        saveEditedProducts,
        cards: state.cards,
        cardToEdit: state.cardToEdit,
        state,
        cardToEdit: state.cardToEdit,
        countOfCards: state.countOfCards,

//

      }}
    >
      {props.children}
    </cardsContext.Provider>
  );
};

export default CardsContextProvider;
