import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./article.scss";

function Article({
  setOneProduct,
  setItem,
  products,
  oneProduct,
  match,
  activeItemIndex,
  setRating,
}) {
  const findOneProduct = () => {
    // console.log(match.params.id);
    const foundProduct = products.filter(
      (product) => product.id === match.params.id
    );
    return setOneProduct(foundProduct[0]);
  };
  const handleThumb = (index) => {
    const pindex = index;
    setItem(pindex);
  };

  const getProductAverageRating = (rating) => {
    const average = rating.reduce((a, b) => a + b) / rating.length;
    return Math.round(average);
  };

  useEffect(() => {
    findOneProduct();
    // eslint-disable-next-line
  }, []);

  return (
    oneProduct && (
      <div className="container2">
        <div className="container2-details">
          <div className="container2-details_bigimg">
            {<img src={oneProduct.images[activeItemIndex]} alt="" />}
          </div>

          <div className="box">
            <div className="row">
              <h2>{oneProduct.description}</h2>
              <span>{oneProduct.price} €</span>
            </div>
            <div className="box-star">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue, oneProduct.id)}
                    />
                    {oneProduct.rating.length > 0 && (
                      <FaStar
                        size={20}
                        className="star"
                        color={
                          ratingValue <=
                          getProductAverageRating(oneProduct.rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                      />
                    )}
                  </label>
                );
              })}
              <p>{oneProduct.rating.length} évaluations</p>
            </div>
            <p>{oneProduct.content}</p>
            <div className="colors">
              {oneProduct.colors.map((color, index) => (
                <button style={{ background: color }} key={index}></button>
              ))}
            </div>
            <div className="thumb">
              {oneProduct.images.map((img, index) => (
                <img
                  src={img}
                  alt=""
                  key={index}
                  className={activeItemIndex === index ? "active" : "notactive"}
                  onClick={() => handleThumb(index)}
                />
              ))}
            </div>
            <div className="shoes-size">
              <span>Taille : </span>
              <select value="{optionsState}">
                {oneProduct.size.map((size, index) => (
                  <option value={size} key={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <button className="cart">Add to Cart</button>
          </div>
        </div>
        <section className="commentary-section">
          <div className="zone-text">
            <form className="form-text">
              <textarea
                type="newMessage"
                // value="message"
                name="newMessage"
                placeholder="Ecris ton commentaire ici..."
              />
              <button type="submit" className="form-text_button">
                AJOUTER UN COMMENTAIRE
              </button>
            </form>
          </div>
          <div className="userNotlog-comInfo">
            <p>
              <Link to="/login" exact="true">
                Connectez vous pour laisser un commentaire
              </Link>
            </p>
          </div>
          <div>
            <ul className="message-list">
              <li>
                <div className="message">
                  <div className="divImg">
                    <img src="" className="divImg-imagesize" alt="" />
                  </div>
                  <div className="message-list_item">
                    <div id="userInfo">
                      <h4 id="userInfo-userName">Kimliyah</h4>
                      <p id="userInfo-date">18h25</p>
                    </div>
                    <span>hello these shoes are fucking great</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  );
}

// Article.propTypes = {
//   match: PropTypes.object.isRequired,
//   product: PropTypes.object.isRequired,
// };
export default Article;
