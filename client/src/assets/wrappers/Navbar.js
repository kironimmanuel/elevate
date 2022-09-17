import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    align-items: center;
    width: 75px;
  }

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    .user-info {
      cursor: default;
      display: flex;
      align-items: center;
      gap: 1rem;
      h5 {
        margin-bottom: 0;
      }
    }
  }

  .notification-bell {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }

  .dropdown {
    font-size: 1rem;
    background: var(--white);
    box-shadow: var(--shadow-4);
    position: absolute;
    top: 4rem;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    border-radius: 12px;
  }
  .dropdown.show {
    display: block;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  @media (min-width: 992px) {
    .small-screen-btn {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .big-screen-btn {
      display: none;
    }
    h5 {
      font-size: 0.9rem;
    }
  }
  .profile {
    background: var(--primary-800);
    border-radius: 50%;
    height: 10px;
    width: 10px;
    padding: 1.7rem;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date {
    display: none;
    margin: 0;
    font-size: 1.25rem;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .date {
      display: block;
    }
    .dropdown {
      left: 80%;
    }
  }
`;
export default Wrapper;
