import styled from "styled-components";

export const DetailItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: calc(100vh - 60px);

  .left {
    flex-grow: 1;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .left .image-container {
    width: 40%;
    border-radius: 10px;
    position: relative;
    background-color: #dedce6;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease-in-out;
    transform: translateY(0px);
  }

  .left .image-container:hover {
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);
  }

  .left .image-container .small-container {
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    position: relative;
    cursor: pointer;
  }

  .left .image-container:hover .small-container {
    transform: translate(-50px, -30px);
    filter: brightness(1.1);
    box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .right {
    width: 40%;
  }

  .right .title-item {
    font-family: "Fredoka One";
    font-size: 1.7rem;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: rgb(65, 65, 65);
  }

  .right .infor-item {
    font-family: "Fredoka One";
    width: 90%;
  }

  .right .infor-item span {
    color: rgb(114, 114, 114);
    font-family: "Roboto";
    margin: auto 5px;
  }

  .right .infor-item a {
    font-family: "Roboto";
    margin: auto 6px;
  }
`;
