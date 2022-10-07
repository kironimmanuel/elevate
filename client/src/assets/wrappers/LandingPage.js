import styled from "styled-components";

const Wrapper = styled.main`
  height: 100vh !important;
  nav {
    width: var(--fluid-width);
    /* max-width: var(--max-width); */
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-weight: 700;
    text-transform: none;
    letter-spacing: 5px;
    span {
      color: var(--primary-800);
    }
  }
  p {
    color: var(--grey-600);
    font-size: 1.1rem;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .main-img {
      display: block;
      width: 40rem;
      margin: auto;
    }
    nav {
      display: none;
    }
    .info {
      text-align: center;
      letter-spacing: 1px;
    }
    .text-container {
      margin-top: -5rem;
    }
  }
`;
export default Wrapper;
