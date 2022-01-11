import React, { useContext } from "react";
import { Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import Registration from "./Registration";
// import Cart from "../Cart";
// import "./Navibar.css";
import { Link, useNavigate } from "react-router-dom";
import { registrationContext } from "../../../contexts/registrationContext";
import { BsDoorClosed } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
import { IconName, RiBubbleChartLine } from "react-icons/ri";
import { cardsContext } from '../../../contexts/cardsContext'

const Navibar = () => {
  const { logOut } = useContext(registrationContext);
  const { getCards } = useContext(cardsContext)
  const navigate = useNavigate();
  function handleLogOut() {
    logOut();
    localStorage.clear();
    navigate("/");
  }

  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getCards();
  }
  const user = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      {/* <div>
        <Navbar className="navbar-bla">
          <Container>
            <Nav className="">
              <Nav.Link href="/">Link</Nav.Link>
              <Nav.Link href="/signup">Link </Nav.Link>
              <Nav.Link href="/product">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav>
            {user ? (
              <div className="registration" onClick={handleLogOut}>
                <RiBubbleChartLine />
              </div>
            ) : (
              <Registration />
            )}
            <Form className="d-flex">
              <FormControl
                onChange={(e) => filterProducts("q", e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Container>
          <div className="registration">
            <Link to="/login">
              <RiBubbleChartLine />

            </Link>
          </div>
        </Navbar>
      </div > */}




      <Navbar Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            {user ? (
              <div className="registration" onClick={handleLogOut}>
                <RiBubbleChartLine />
              </div>
            ) : (
              <Registration />
            )}
            <Form className="d-flex">
              <FormControl
                onChange={(e) => filterProducts("q", e.target.value)}

                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
};

export default Navibar;


