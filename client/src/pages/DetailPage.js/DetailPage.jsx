import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import Comment from "../../components/comments/Comments";
import { cardsContext } from "../../contexts/cardsContext";
// import Feedback from "../components/Feedbacks";
// import Likes from "../components/Likes";
// import Feedbacks from "../components/Feedbacks/Feedbacks";
// import RecommendItems from "../components/RecommendItems";
// import Comment from "../components/comments/Comment";
// import Likes from "../components/Likes/Likes";
// import { viewsContext } from "../contexts/ViewsContext";
// import { subscribersContext } from "../contexts/SubscribersContext";
const DetailPage = () => {
    const {
        getProductsToEdit,
        cardToEdit,
        // checkProductInCart,
        // addAndDeleteProductInCart,
        // checkProductInFavorites,
        // addAndDeleteProductInFavorites,
    } = useContext(cardsContext);
    // const { getSubscriber, subscribers, checkSubscribe, checking } =
    //     useContext(subscribersContext);
    // useEffect(() => {
    //     getSubscriber(user.currentUser.email);
    //     checkSubscribe(user.currentUser.email);
    // }, []);
    const params = useParams();
    useEffect(() => {
        getProductsToEdit(params.id);
    }, []);
    let user = JSON.parse(localStorage.getItem("user"));
    // const { addViews } = useContext(viewsContext);
    // useEffect(() => {
    //     addViews(user.currentUser.email, productToEdit);
    // }, [productToEdit]);
    // if (productToEdit) {
    // }

    return (
        <div className="container">
            {cardToEdit ? (
                <div style={{ display: "flex" }}>
                    <div>
                        <img width="500px" src={cardToEdit.img} alt="product" />
                    </div>
                    <div>
                        <h2>{cardToEdit.name}</h2>
                        <h3>{cardToEdit.description}</h3>
                        <p>
                            {/* {checking ? (
                                subscribers ? (
                                    <>
                                        <del style={{ color: "red" }}>{cardToEdit.price}</del>
                                        <ins style={{ color: "blue", fontWeight: "500" }}>
                                            {Math.round(
                                                (cardToEdit.price * (100 - subscribers.discount)) /
                                                100
                                            )}
                                        </ins>
                                    </>
                                ) : (
                                    <h4>Load</h4>
                                )
                            ) : (
                                cardToEdit.price
                            )} */}
                            {cardToEdit.price}

                        </p>
                        <p>Brand: {cardToEdit.brand} </p>
                        <div
                            style={{
                                marginBottom: "-10px",
                                width: "30px",
                                borderRadius: "50%",
                                height: "30px",
                                display: "inline-block",
                            }}
                        ></div>
                        <br />
                        <br />
                        {/* <Feedback /> */}
                        {/* <Likes /> */}
                        {/* <>
                            <Button
                                style={{ marginRight: "10px" }}
                                variant={
                                    checkProductInCart(cardToEdit.id) ? "danger" : "primary"
                                }
                                onClick={() => {
                                    {
                                        checking ? (
                                            subscribers ? (
                                                <>
                                                    {addAndDeleteProductInCart(
                                                        cardToEdit,
                                                        subscribers.discount
                                                    )}
                                                </>
                                            ) : (
                                                <></>
                                            )
                                        ) : (
                                            <>{addAndDeleteProductInCart(cardToEdit)}</>
                                        );
                                    }
                                }}
                            >
                                Корзина
                            </Button>
                            <Button
                                variant={
                                    checkProductInFavorites(cardToEdit.id)
                                        ? "danger"
                                        : "primary"
                                }
                                onClick={() => addAndDeleteProductInFavorites(cardToEdit)}
                            >
                                Избранное
                            </Button>
                            <Feedbacks />
                            <Likes />
                        </> */}
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}

            <div>
                <Comment />
            </div>
        </div>
    );
};

export default DetailPage;