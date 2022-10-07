import styled from "styled-components";

const Wrapper = styled.nav`
  background: transparent;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;

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
        font-size: 1rem;
      }
    }
  }

  .notification-bell {
    font-size: 1.25rem;
    padding-top: 0.25rem;
  }
  .chat {
    font-size: 1.25rem;
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
    height: 8px;
    width: 8px;
    padding: 1.35rem;
    color: var(--white);
    font-size: 1.35rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date {
    display: none;
    margin: 0;
    font-size: 1.1rem;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 100%;
      margin: auto 1rem;
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
