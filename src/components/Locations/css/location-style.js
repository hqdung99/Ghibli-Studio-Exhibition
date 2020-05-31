import { ContainerWrapper } from "../../style/style-nav-item";
import styled from "styled-components";

export const LocationWrapper = styled(ContainerWrapper)`
  .items-container .item .card .top-card {
    background: rgb(253, 140, 253);
    background: linear-gradient(
      315deg,
      rgb(244, 140, 253) 0%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .top-card .image-container {
    background: rgb(249, 185, 255);
    background: linear-gradient(
      315deg,
      rgb(249, 185, 255) 0%,
      rgb(255, 241, 255) 60%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .content-container .climate {
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    color: rgb(163, 163, 163);
    font-size: 0.9;
  }

  .items-container .item .card .content-container .terrain {
    color: #ffbdf9;
    font-family: "Fredoka One";
    margin: 10px auto;
    font-weight: 500;
  }

  .items-container .item .card .content-container .btn {
    background-color: #ff60f7;
  }

  .items-container .item .card .content-container .surface_water {
    font-family: "Fredoka One";
  }

  .items-container .item .card .content-container .btn:hover {
    background-color: #ff3bef;
  }
`;
