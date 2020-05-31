import { ContainerWrapper } from "../../style/style-nav-item";
import styled from "styled-components";

export const SpeciesWrapper = styled(ContainerWrapper)`
  .items-container .item .card .top-card {
    background: rgb(159, 253, 140);
    background: linear-gradient(
      315deg,
      rgb(185, 253, 140) 0%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .top-card .image-container {
    background: rgb(216, 255, 185);
    background: linear-gradient(
      315deg,
      rgb(222, 255, 185) 0%,
      rgb(244, 255, 241) 60%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .content-container .classification {
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    color: rgb(163, 163, 163);
    font-size: 0.9;
  }

  .items-container .item .card .content-container .eye_colors {
    color: #4c6339;
    text-align: center;
    color: #acfb63;
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    font-size: 0.9;
  }

  .items-container .item .card .content-container .hair_colors {
    color: #acfb63;
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    font-size: 0.9;
  }

  .items-container .item .card .content-container .btn {
    background-color: #c2ff60;
  }

  .items-container .item .card .content-container .release-date {
    font-family: "Fredoka One";
  }

  .items-container .item .card .content-container .btn:hover {
    background-color: #a3ff3b;
  }
`;
