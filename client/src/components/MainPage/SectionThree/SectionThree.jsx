import Button from "@restart/ui/esm/Button";
import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="mainBlock d-flex justify-content-evenly flex-wrap my-5">
      <div className="blockOne text-lg-start">
        <span>Специальное предложение</span>
        <h3
          style={{
            fontSize: "40px",
            fontWeight: "300",
            letterSpacing: "1.5px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          Wood Cloth
        </h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </p>
        <Button className="btn">Buy</Button>
      </div>

      <div className="blockTwo">
        <div className="emptyBg"></div>
        <img
          style={{ width: "550px", height: "430px" }}
          src="https://images.pexels.com/photos/9594682/pexels-photo-9594682.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        ></img>
      </div>
    </div>
  );
};

export default SectionThree;
