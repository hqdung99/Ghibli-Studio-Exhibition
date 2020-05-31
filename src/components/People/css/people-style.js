import { ContainerWrapper } from "../../style/style-nav-item";
import styled from "styled-components";

export const PeopleWrapper = styled(ContainerWrapper)`
  .items-container .item .card .top-card {
    background: rgb(140, 193, 253);
    background: linear-gradient(
      315deg,
      rgb(140, 221, 253) 0%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .top-card .image-container {
    background: rgb(185, 244, 255);
    background: linear-gradient(
      315deg,
      rgb(185, 233, 255) 0%,
      rgb(241, 253, 255) 60%,
      rgb(255, 255, 255) 100%
    );
  }

  .items-container .item .card .content-container .name {
    font-family: "Fredoka One";
    font-size: 1.2rem;
    margin-bottom: 0;
    color: rgb(63, 63, 63);
    margin-top: 60px;
  }

  .items-container .item .card .content-container .gender {
    margin-top: 0;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    font-family: "Ropa Sans";
    color: rgb(163, 163, 163);
    font-size: 0.9;
  }

  .items-container .item .card .content-container .age {
    color: #bdfffc;
    font-family: "Fredoka One";
    margin: 10px auto;
    font-weight: 500;
  }

  .items-container .item .card .content-container .director span {
    color: #63fbe7;
    margin: auto 5px;
  }

  .items-container .item .card .content-container .btn {
    background-color: #60faff;
  }

  .items-container .item .card .content-container .btn:hover {
    background-color: #3bffef;
  }
`;
