import React from "react";
import { Card } from "react-bootstrap";
import "./MainHeader.css";

import { Link } from "react-router-dom";

const MainHeader = () => (
  <>

    <div className="background">
      <center>
        <div className="smallest-choices-bla">
          <h1 className="smallest-choices">
            Main
          </h1>
          <Link to="/product">
            <button className="smallest-choices-shop">Shop +</button>
          </Link>
        </div>
        <div className="wrapper">
          <h1>Carousel</h1>
        </div>
      </center>
    </div>

    <div className="cards">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Dogs</Card.Title>

          <Card.Text>14$</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>North American Birds</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>12$</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>New York, London, Paris</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>15$</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Dogs</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>14$</Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className="order">
      <h3>Led by Transparency</h3>
      <div className="second-cards">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>Fast shipping. Free on orders over $25.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>Sustainable process from start to finish.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>Unique designs and high-quality materials.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>Partnering with small businesses in the KG.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    <center>
      <div className="ordering">
        <button>Order now +</button>
      </div>
    </center>
    <center>
      <div className="explore">
        <h3>Explore our products</h3>
        <div className="third-cards">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Greeting cards</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Assorted Card Sets</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Notebooks</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </center>
  </>
);

export default MainHeader;
