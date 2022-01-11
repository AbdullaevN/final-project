import axios from "axios";
import React, { useReducer } from "react";
import $axios from "../axios";
import { API } from "../helpers/const";

export const cardsContext = React.createContext();
const INIT_STATE = {
  cards: null,
  cardToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return { ...state, cards: action.payload };
    case "GET_PRODUCTS_TO_EDIT":
      return { ...state, cardToEdit: action.payload };
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
  const getCards = async () => {
    try {
      const { data } = await $axios.get("/product");
      console.log(data.rows);
      dispatch({
        type: "GET_CARDS",
        payload: data.rows,
      });
    } catch (error) {
      console.log(error);
      console.log("error ");
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



  //!Пагинация
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    if (state.products) {
      const data = state.products;
      setPosts(data);
    }
  }, [state.products]);

  const numberOfLastPost = currentPage * postsPerPage;
  const numberOfFirstPost = numberOfLastPost - postsPerPage;
  const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost);
  const totalPosts = posts.length;

  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };
  function resetCurrentPage() {
    setCurrentPage(1);
  }
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

//
        products: state.products,
        productDetails: state.productDetails,
        totalPosts: totalPosts,
        currentPosts: currentPosts,
        postsPerPage: postsPerPage,
        productCountInCart: state.productCountInCart,
        currentPage: currentPage,
        cart: state.cart,
      }}
    >
      {props.children}
    </cardsContext.Provider>
  );
};

export default CardsContextProvider;