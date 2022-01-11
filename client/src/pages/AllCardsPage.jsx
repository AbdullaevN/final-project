import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import $axios from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { cardsContext } from "../contexts/cardsContext";
import "./AllCardsPage.css";
import Pagination from "../components/pagination/Pagination";
import Comment from "../components/comments/Comments";

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

  //

  let object = new URLSearchParams(window.location.search)
  function filterProducts(key, value) {
    // if (key) {
    object.set(key, value);

    // console.log(resetFilter)
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    if (!key) {
      newUrl = '/products'
    }
    console.log(newUrl)
    navigate(newUrl);
    getCards()
  }

  const handleFilter = async (e) => {
    const value = e.target.value;
    getCards(value);
    console.log(data);
    setData(data.rows);
  };

  // const [brandValue, setBrandValue] = useState("");
  // const [resetFilter, setResetFilter] = useState(false)

  // function handleFilter(key, value) {
  //   // if (key) {
  //   object.set(key, value);

  //   // console.log(resetFilter)
  //   let newUrl = `${window.location.pathname}?${object.toString()}`;
  //   if (!key) {
  //     newUrl = '/products'
  //   }
  //   console.log(newUrl)
  //   navigate(newUrl);
  //   getProducts();
  //   setBrandValue(value);
  // }
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







  //


  //

  return (
    <>

      <div>
        <h3>Add products</h3>
      </div>
      <div>
        <input type="text" value={search} onChange={(e) => {
          setSearch(e.target.value)
          filterProducts("q", search)
        }} />
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
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Kids">Kids</option>
            <option value="Teens">Teens</option>
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
                    <Link to={"detail/" + p.id}>
                      <Button
                        style={{
                          marginLeft: "50px",
                          marginTop: "10px",
                        }}
                        variant="dark"
                      >
                        Подробнее
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div>
          <Pagination />
        </div>

      </div>

    </>
  );
};

export default AllCardsPage;
