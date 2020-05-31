import React, { Component } from "react";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className="container">
          <div className="image-container">
            <img
              src="./images/Ghibli-Home-3.jpg"
              alt="Home"
              className="img-fluid"
            ></img>
          </div>
          <div className="image-container">
            <img
              src="./images/Ghibli-Home-4.jpg"
              alt="Home"
              className="img-fluid"
            ></img>
          </div>
          <div className="image-container">
            <img
              src="./images/Ghibli-Home-5.jpg"
              alt="Home"
              className="img-fluid"
            ></img>
          </div>
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .container {
    display: flex;
  }

  .container .image-container {
    width: 30%;
    overflow: hidden;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: 0.3s all ease-in-out;
  }

  .container .image-container:hover {
    box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.4);
  }

  .container .image-container img {
    height: 100%;
    width: 100%;
    transition: 0.3s all ease-in-out;
  }

  .container .image-container img:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`;
