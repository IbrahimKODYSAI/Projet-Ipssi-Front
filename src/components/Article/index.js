import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
import "../../styles/utils.scss"
import "./article.scss";

function Article({
  getOneProduct,
  oneProduct,
  setItem,
  activeItemIndex,
  setRating,
  match,
  newComment,
  onSubmitCemmentary,
  getOneProductCommentaries,
  commentList,
  onInputChange
}) {

  
  useEffect(() => {
    console.log(match.params.id)
    getOneProduct(match.params.id);
    getOneProductCommentaries(match.params.id);
  }, []);

  const handleThumb = (index) => {
    setItem(index);
  };

  // const getProductAverageRating = (rating) => {
  //   if(rating.length > 0) {
  //     const average = rating.reduce((a, b) => a + b) / rating.length;
  //     return Math.round(average);
  //   }
  // };

  const handleChangeComment = (e) => {
    e.preventDefault()
    const { name, value} = e.target
    onInputChange(name, value)
  }

  const handleSubmitComment = (e) => {
  e.preventDefault()
  onSubmitCemmentary();
}


  return (
    oneProduct && (
      <div className="container2">
        <div className="container2-details">
          <div className="container2-details_bigimg fade-in-image">
            {<img src={`http://localhost:3001/${oneProduct.images[activeItemIndex].filePath}`} alt="" />}          
          </div>

          <div className="box">
            <div className="row">
              <h2>{oneProduct.title}</h2>
              <span>{oneProduct.price} €</span>
            </div>
            {/* <div className="box-star">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue, oneProduct._id)}
                    />

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
                  </label>
                );
              })}
              <p>{oneProduct.rating.length} évaluations</p>
            </div> */}
            <p>{oneProduct.description}</p>
            <div className="colors">
              {oneProduct.colors.map((color, index) => (
                <button style={{ background: color }} key={index}></button>
              ))}
            </div>
            <div className="thumb">
              {oneProduct.images.map((img, index) => (
                <img
                  src={`http://localhost:3001/${img.filePath}`}
                  alt=""
                  key={index}
                  className={activeItemIndex === index ? "active" : "notactive"}
                  onClick={() => handleThumb(index)}
                />
              ))}
            </div>
            <div className="shoes-size">
              <span>Taille : </span>
              {/* <select value="{optionsState}">
                {oneProduct.size.map((size, index) => (
                  <option value={size} key={index}>
                    {size}
                  </option>
                ))}
              </select> */}
            </div>
            <button className="cart">Add to Cart</button>
          </div>
        </div>
        <section className="commentary-section">

          <div className="zone-text">
            <h1>Espace commentaires</h1>
            {JSON.parse(sessionStorage.getItem("token")) && (
              <form className="form-text">
                <textarea
                  type="newMessage"
                  value={newComment}
                  name="newComment"
                  placeholder="Ecris ton commentaire ici..."
                  onChange={(e) => handleChangeComment(e)}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => handleSubmitComment(e)}
                >
                  SEND
                </button>
              </form>
            )}
          </div>
          {!JSON.parse(sessionStorage.getItem("token")) && (

            <div className="userNotlog-comInfo">
              <p>
                <Link to="/login" exact="true">
                  Connectez vous pour laisser un commentaire
                </Link>
              </p>
            </div>
          )}
          <div>
            <ul className="message-list">
              {commentList.map(comment => (
                <li key={comment._id}>
                  <div className="message">
                    <div className="divImg">
                    {comment.author.avatar && (comment.author.avatar.length > 0 ) && (
                      <img src={`http://localhost:3001/${comment.author.avatar[0].filePath}`} className="divImg-imagesize" alt="" />
                    )}
                    </div>
                    <div className="message-list_item">
                      <div id="userInfo">
                        <h4 id="userInfo-userName">{comment.author.username}</h4>
                        <p id="userInfo-date">{comment.createdAt}</p>
                      </div>
                      <span>{comment.commentary}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>)
  );
}

// Article.propTypes = {
//   match: PropTypes.object.isRequired,
//   product: PropTypes.object.isRequired,
// };
export default Article;
