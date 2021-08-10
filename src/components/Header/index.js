import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import LangFr from "../../assets/img/fr.png";
import LOGO from "../../assets/img/LOGO.PNG";
import "../../styles/utils.scss"

const Header = ({
  inputSearchValue,
  inputChange,
  products,
  foundProducts,
  setFoundedProduct,
}) => {
  const handleOnInputChange = (event) => {
    const { name: fieldName, value: fieldValue } = event.target;
    inputChange(fieldName, fieldValue);

    const foundProducts = products.filter((product) =>
      product.title.toLowerCase().includes(fieldValue.toLowerCase())
    );
    console.log(foundProducts);
    setFoundedProduct(foundProducts);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <div className="languages">
        <div>
          <p>Langues</p>
        </div>
        <div className="country-selector">
          <a href="/">
            <img src={LangFr} alt="" />
          </a>
        </div>
      </div>
      <div className="header">
        <div className="header-top">
          <div className="header-top_logo">
            <a href="/">
              <img src={LOGO} alt="" />
            </a>
            <Link to="/" exact="true">
              <p>BIGOODEAL</p>
            </Link>
          </div>
          <div className="header-top_input">
            <form
              className="header-top_input_form"
              action=""
              onSubmit={(event) => handleSubmit(event)}
            >
              <input
                type="text"
                placeholder="Search.."
                autoComplete="off"
                name="inputSearchValue"
                value={inputSearchValue}
                onChange={(event) => handleOnInputChange(event)}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <div className="header-top_input_display">
              {foundProducts.slice(0, 6).map((item) => (
                <div>{item.title}</div>
              ))}
            </div>
          </div>
          {/* <div className="header-top_social">
                        <svg id="twitter" preserveAspectRatio="xMidYMid meet" viewBox="0 0 612 612"><path d="M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0 1 24.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z" /></svg>
                        <svg id="facebook" preserveAspectRatio="xMidYMid meet" viewBox="0 0 96.124 96.123"><path d="M72.09.02L59.623 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.96v15.804a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.96-1.96H56.84v-9.247c0-4.444 1.06-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.96-1.96V1.98A1.96 1.96 0 0 0 72.088.02z" /></svg>
                        <svg id="pinterest" preserveAspectRatio="xMidYMid meet" viewBox="0 0 486.392 486.392"><path d="M430.15 135.248C416.864 39.125 321.075-9.818 218.872 1.642 138.07 10.702 57.513 76.03 54.168 169.447c-2.037 57.03 14.136 99.8 68.4 111.84 23.498-41.586-7.57-50.676-12.434-80.802C90.222 77.367 252.16-6.718 336.974 79.313c58.733 59.583 20.034 242.77-74.57 223.71-90.62-18.18 44.384-164.005-27.936-192.61-58.793-23.287-90.013 71.134-62.137 118.07-16.354 80.712-51.556 156.71-37.3 257.91 46.208-33.56 61.803-97.734 74.57-164.704 23.226 14.135 35.66 28.757 65.27 31.037 109.194 8.48 170.266-109.014 155.28-217.48z" /></svg>
                        <svg id="instagram" preserveAspectRatio="xMidYMid meet" viewBox="0 0 97.395 97.395"><path d="M12.5 0h72.394c6.875 0 12.5 5.09 12.5 12.5v72.395c0 7.41-5.625 12.5-12.5 12.5H12.5c-6.876 0-12.5-5.09-12.5-12.5V12.5C0 5.09 5.624 0 12.5 0zm58.45 10.82a4.395 4.395 0 0 0-4.383 4.386V25.7a4.396 4.396 0 0 0 4.383 4.386h11.008A4.398 4.398 0 0 0 86.34 25.7V15.207a4.397 4.397 0 0 0-4.384-4.385H70.948zm15.44 30.368h-8.573a28.486 28.486 0 0 1 1.25 8.355c0 16.2-13.556 29.332-30.275 29.332-16.718 0-30.272-13.132-30.272-29.332 0-2.904.438-5.708 1.25-8.355h-8.945v41.14a3.884 3.884 0 0 0 3.872 3.873h67.822a3.883 3.883 0 0 0 3.872-3.87V41.187h-.003zm-37.6-11.655c-10.8 0-19.56 8.485-19.56 18.953S37.99 67.44 48.79 67.44c10.804 0 19.563-8.486 19.563-18.954s-8.757-18.953-19.56-18.953z" /></svg>
                    </div> */}
        {!JSON.parse(sessionStorage.getItem('token')) && (
          <div className="header-top_account">
              <Link to="/login" exact="true">
                <button className="btn btn-primary" type="button">
                  Login
                </button>
              </Link>
              <Link to="/signup" exact="true">
                <button className="btn btn-warning" type="button">
                  Register
                </button>
              </Link>

          </div>
        )}
        {JSON.parse(sessionStorage.getItem('token')) && (
          <div className="header-top_account">
              <Link to="/user" exact="true">
                <button className="btn btn-primary" type="button">
                  My account
                </button>
              </Link>
          </div>
        )}
        </div>
        <div className="nav-pdg">
          <div className="sub-nav">
            <ul className="sub-nav-liste">
              <li className="sub-nav-items">
                <button>Nouveautés</button>
                <div className="submenu">
                  <ul className="submenu-lists">
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="sub-nav-items">
                <button>Electroménager</button>
                <div className="submenu">
                  <ul className="submenu-lists">
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="sub-nav-items">
                <button>High-Tech</button>
                <div className="submenu">
                  <ul className="submenu-lists">
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="sub-nav-items">
                <button>Chaussuress</button>
                <div className="submenu">
                  <ul className="submenu-lists">
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="sub-nav-items">
                <button>Bijoux</button>
                <div className="submenu">
                  <ul className="submenu-lists">
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>{" "}
                    <Link to="#" exact="true">
                      <li>ITEM</li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
