import styled from "styled-components";

export const ContainerWrapper = styled.div`
  .items-container .item {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;
    position: relative;
  }

  .items-container {
    margin: 50px auto;
    background-color: #fff7f8;
    border-radius: 20px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.3);
  }

  .items-container .item .card {
    border-radius: 20px;
    height: 94%;
    width: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.2s all linear;
  }

  .items-container .item .card:hover {
    box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .items-container .item .card .top-card {
    width: 100%;
    height: 30%;
    background: rgb(253, 242, 140);
    background: linear-gradient(
      315deg,
      rgb(223, 253, 140) 0%,
      rgb(255, 255, 255) 100%
    );

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .items-container .item .card .top-card .image-container {
    width: 60%;
    height: 90%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(253, 242, 140);
    background: linear-gradient(
      315deg,
      rgb(223, 253, 140) 0%,
      rgb(255, 255, 255) 100%
    );
    border-radius: 10px;

    transform: translateY(40px);
    z-index: 10;
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  .items-container .item .card .top-card .image-container:hover {
    filter: brightness(1.1);
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(45px) scale(1.01);
  }

  .items-container .item .card .content-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
  }

  .items-container .item .card .content-container .name {
    font-family: "Fredoka One";
    font-size: 1.2rem;
    margin-bottom: 0;
    color: rgb(63, 63, 63);
    margin-top: 60px;
  }

  .items-container .item .card .content-container .title {
    font-family: "Fredoka One";
    font-size: 1.2rem;
    margin-bottom: 0;
    color: rgb(63, 63, 63);
    margin-top: 60px;
  }

  .items-container .item .card .content-container .description {
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    color: rgb(163, 163, 163);
    font-size: 0.9;
  }

  .items-container .item .card .content-container .vehicle_class {
    color: #feffbd;
    font-family: "Fredoka One";
    margin: 10px auto;
    font-weight: 500;
  }

  .items-container .item .card .content-container .btn {
    background-color: #fff460;
    width: 100px;
    border: none;
    position: absolute;
    bottom: 30px;
  }

  .items-container .item .card .content-container .length {
    font-family: "Fredoka One";
  }

  .items-container .item .card .content-container .btn:hover {
    background-color: #ffeb3b;
    color: rgb(80, 80, 80);
  }
`;
