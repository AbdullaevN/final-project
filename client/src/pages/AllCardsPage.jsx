import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import $axios from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { cardsContext } from "../contexts/cardsContext";
import "./AllCardsPage.css";
import Pagination from "../components/pagination/Pagination";

const AllCardsPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("Greeting card");
  const { getCards, addCards, cards, deleteCard } = useContext(cardsContext);
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    brand: "one",
    type: "Man",
    img: ""
  });

  const getProducts = async () => {
    try {
      const { data } = await $axios.get("/product");
      console.log(data);
      setData(data.rows);
    } catch (error) {
      console.log(error);
      console.log("error ");
    }
  };
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);
    const { data } = await $axios.get("/product?limit=20&q=" + value);
    console.log(data);
    setData(data.rows);
  };

  const handleFilter = async (e) => {
    const value = e.target.value;
    getCards(value);
    console.log(data);
    setData(data.rows);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    addCards(inputs);
  };

  const handleDelete = async (id) => {
    deleteCard(id);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div>
        <Pagination />
      </div>
      <div>
        <h3>Add products</h3>
      </div>
      <div>
        <input type="text" value={search} onChange={handleSearch} />
        <br />

        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={inputs.price}
        />
        {/* <input
          type="text"
          name="brand"
          onChange={handleChange}
          value={inputs.brand}
        />*/}
        <input
          type="text"
          name="img"
          onChange={handleChange}
          value={inputs.img}
        />
        <select name="brand" id="" onChange={handleChange}>
          <option value="one"> one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
        <select name="type" id="" onChange={handleChange}>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
          <option value="Kids">Kids</option>
          <option value="Teens">Teens</option>
        </select>
        <div>
          <select id="" onChange={handleFilter}>
            <option value="Greeting card">Greeting card</option>
            <option value="Notebook">Notebook</option>
            <option value="Assorted card sets">Assorted card sets</option>
            <option value="Wallpaper">Wallpaper</option>
          </select>
        </div>
        <button onClick={handleClick}>Create</button>
        <div className="main-cards">
          {cards ? (
            cards.map((p) => (
              <div key={p.id} className="main-cardss">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={p.img} />
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.price}</Card.Text>
                    <Card.Text>{p.brand}</Card.Text>
                    <Card.Text>{p.type}</Card.Text>


                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate(`/detail/${p.id}`);
                      }}
                    >
                      Update
                    </Button>

                    <Button
                      onClick={() => handleDelete(p.id)}
                      variant="primary"
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AllCardsPage;
