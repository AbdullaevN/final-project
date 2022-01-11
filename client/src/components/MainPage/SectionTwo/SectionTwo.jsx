import React from "react";
import "./SectionTwo.css";
// import Aos from "aos";

const SectionTwo = ({ id }) => {
  return (
    <div id={id} className="mainBlockOfPics">
      <h1 style={{ marginTop: "40px", marginBottom: "80px" }}>
        Welcome to our market
      </h1>

      <div className="twoPics">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="pic1">
            <a href="#">
              <img
                style={{ paddingBottom: "35px", height: "auto" }}
                src="https://images.pexels.com/photos/6213709/pexels-photo-6213709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ></img>
              <span>great</span>
            </a>
          </div>

          <div className="pic2">
            <a href="#">
              <img
                style={{ paddingBottom: "35px" }}
                src="https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ></img>
              <span>unique</span>
            </a>
          </div>

          <div className="pic3">
            <a href="#">
              <img src="https://images.pexels.com/photos/1568340/pexels-photo-1568340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
              <span>special</span>
            </a>
          </div>

          <div className="pic4">
            <a href="#">
              <img src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
              <span>gorgeous</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
