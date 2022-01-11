import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { cardsContext } from "../contexts/cardsContext";

const EditPage = () => {
  const { saveEditedProducts, getProductsToEdit, cardToEdit } =
    useContext(cardsContext);
  const params = useParams();
  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    price: yup.number().required("Required"),
    brand: yup.string().min(1).max(100).required("Required"),
    type: yup.string().required("Required"),
    img: yup.string().min(3).max(10000).required("Required"),
  });
  const navigate = useNavigate();
  return (
    <div>
      <h2>Редактирование</h2>
      {cardToEdit ? (
        <Formik
          validationSchema={schema}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            saveEditedProducts(data);
            navigate(-1);
          }}
          initialValues={cardToEdit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form
              style={{ width: "90%", margin: "0 auto" }}
              className="bg-light p-4"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите название "
                  name="name"
                  onChange={handleChange}
                  isValid={!errors.title && touched.title}
                  isInvalid={!!errors.title}
                  value={values.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>tovar</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="brand"
                  onChange={handleChange}
                  isValid={!errors.brand && touched.brand}
                  isInvalid={!!errors.brand}
                  value={values.brand}
                >
                  <option>vybrat</option>
                  <option value="Greeting card">1</option>
                  <option value="Notebook">2</option>
                  <option value="Assorted card sets">3</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="type"
                  onChange={handleChange}
                  isValid={!errors.type && touched.type}
                  isInvalid={!!errors.type}
                  value={values.type}
                >
                  <option>vybrat</option>
                  <option value="Greeting card">1</option>
                  <option value="Notebook">2</option>
                  <option value="Assorted card sets">3</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.type}
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>cena</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите цену товара"
                  name="price"
                  onChange={handleChange}
                  isValid={!errors.price && touched.price}
                  isInvalid={!!errors.price}
                  value={values.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>img</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите img "
                  name="img"
                  onChange={handleChange}
                  isValid={!errors.img && touched.img}
                  isInvalid={!!errors.img}
                  value={values.img}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.img}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                style={{
                  border: "none",
                  marginLeft: "0",
                  backgroundColor: "#1C374C",
                }}
                variant="primary"
                type="submit"
              >
                Отправить
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;