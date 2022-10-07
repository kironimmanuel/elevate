import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: transparent;
  gap: 2rem;

  .left-chart {
    border-radius: var(--borderRadius);
    grid-column: 1 / span 1;
    box-shadow: var(--shadow-2);
    background: var(--white);
    padding: 1.5rem;
    padding-bottom: 0;
  }
  .right-chart {
    border-radius: var(--borderRadius);
    grid-column: 2 / span 3;
    box-shadow: var(--shadow-2);
    background: var(--white);
    padding: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 0;
  }
  .pie-chart {
    margin-top: 5rem;
  }

  @media (max-width: 992px) {
    display: none;
  }
  margin-top: 2rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
    span {
      margin-left: 0.2rem;
      font-size: 0.9rem;
    }
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
