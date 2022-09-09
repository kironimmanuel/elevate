import styled from "styled-components";

const Wrapper = styled.article`
  padding: 1rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  /* border-bottom: 5px solid ${(props) => props.color}; */
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-300);
  }
  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .link {
      text-decoration: underline dotted 1px black;
      text-underline-offset: 5px;
      font-size: 0.9rem;
      color: var(--grey-900);
    }
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 50px;
    height: 50px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.5rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
