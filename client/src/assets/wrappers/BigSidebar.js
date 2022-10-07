import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: var(--shadow-2);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
      header {
        .logo {
          height: 50px;
          width: 50px;
        }
        h1 {
          margin-top: 1.25rem;
          margin-left: 0.5rem;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
    h3 {
      margin-top: 1.2rem;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
      padding-left: 1.5rem;
      opacity: 0.3;
      font-weight: 600;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      transition-property: margin-left;
      margin-left: 0;
    }

    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      &:nth-child(6) {
        margin-top: 31.5rem !important;
      }
    }
    .nav-link:hover:not(.active) {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: #ffffff;
      background: var(--primary-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
