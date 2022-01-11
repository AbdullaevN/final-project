import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Toastify from "toastify-js";
import { registrationContext } from "../../contexts/registrationContext";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f5eee6;
  color: black;
  cursor: pointer;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUpUser, logSuccess, errorMSG } = useContext(registrationContext);
  console.log(email, 'email');
  console.log(password, 'pass');
  useEffect(() => {
    console.log(logSuccess);
    if (logSuccess) navigate("/");
  }, [logSuccess]);
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Create an account</Title>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!email || !password) {
              }
              setIsSubmitting(true);
              signUpUser(email, password)
                .then((response) => { })
                .catch((error) => {
                  console.log(error.message);
                  Toastify({
                    text: error.message,
                    className: "error",
                    style: {
                      background:
                        "linear-gradient(to right, rgb(71, 22, 22), red)",
                    },
                  }).showToast();
                })
                .finally(() => setIsSubmitting(false));
            }}
          >
            <Input
              placeholder="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {logSuccess ? <></> : <p style={{ color: "red" }}>{errorMSG}</p>}

            <Button>Create</Button>

          </Form>

        </Wrapper>
      </Container>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default SignUp;
