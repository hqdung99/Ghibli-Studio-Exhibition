import { ContainerWrapper } from "../../style/style-nav-item";
import styled from "styled-components";

export const FilmWrapper = styled(ContainerWrapper)`
  .items-container {
    background-color: #fff7f8;
  }

  .items-container .item .card {
    background-color: #f6f6f6;
  }

  .items-container .item .card .top-card {
    background: rgb(253, 158, 140);
    background: linear-gradient(
      315deg,
      rgba(253, 158, 140, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .items-container .item .card .top-card .image-container {
    background: rgb(255, 185, 197);
    background: linear-gradient(
      315deg,
      rgba(255, 185, 197, 1) 0%,
      rgba(255, 241, 241, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .items-container .item .card .content-container .director {
    color: #ffbdc2;
  }

  .items-container .item .card .content-container .director span {
    color: #fb6370;
  }

  .items-container .item .card .content-container .btn {
    background-color: #ff6072;
  }

  .items-container .item .card .content-container .btn:hover {
    background-color: #ff3b4b;
  }
`;
