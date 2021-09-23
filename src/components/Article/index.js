import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import "../../styles/utils.scss";
import "./article.scss"

toast.configure()

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
  onInputChange,
  getProducts,
  cartItems,
  setCartItems,
  onSubmitCart
}) {
  
  let getLocalCart = localStorage.getItem("cart")

  useEffect(() => {
    getProducts();
    getOneProduct(match.params.id); 
    getOneProductCommentaries(match.params.id);
    let localCart = JSON.parse(getLocalCart)
    if (localCart) setCartItems(localCart)
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  const [quantity, setQuantity] = useState(1)


  const cartItem = {
    _id: oneProduct._id,
    images: oneProduct.images[0].filePath,
    name: oneProduct.name,
    title: oneProduct.title,
    price: oneProduct.price,
    quantity: quantity
  }

  const handleAddCartItem = async (e, cartItem) => {  
    e.preventDefault();
    try {
      const existItem = cartItems.find((item) => item._id === cartItem._id)
      if(existItem) {
        let strinCopy = JSON.stringify(
          cartItems.map((item) => 
          item._id === existItem._id 
          ? { ...existItem, quantity: existItem.quantity + quantity }
          : item
        ))
        localStorage.setItem("cart", strinCopy)
      }else {
        let strinCopy = JSON.stringify([...cartItems, { ...cartItem, quantity: quantity}])
        localStorage.setItem("cart", strinCopy)
      }

      let getLocalCart = localStorage.getItem("cart")
      let localCart = JSON.parse(getLocalCart)
      setCartItems(localCart)

      await onSubmitCart()
      toast.success("product added to cart", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000
      })
    }catch (error) {
        console.log('user cart update failed')
    }
  }

  const handleThumb = (index) => {
    setItem(index);
  };

  const getProductAverageRating = (rating) => { 
    if(rating.length > 0) {
      const average = rating.reduce((a, b) => a + b) / rating.length;
      return Math.round(average);
    }
  };

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
            <div className="box-star">
              <div>
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
                            getProductAverageRating(oneProduct.ratings)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                        />
                    </label>
                  );
                })}
              </div>
              <p>{oneProduct.ratings.length} évaluations</p>
            </div>
            <p>{oneProduct.description}</p>
              <div className="colors">
                {oneProduct.colors.map((color, index) => {
                  return color !== "" ? <button style={{ background: color }} key={index}></button> : null
                })}
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
              <span>Quantité : </span>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <button className="cart" onClick={(e) => handleAddCartItem(e, cartItem)}>Add to Cart</button>
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
                      <p>{comment.commentary}</p>
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





  // const handleAddProduct = (oneProduct) => {
  //   const productExist = cart.find((item) => item._id === oneProduct._id);
  //   if(productExist){
  //     setCartItem(
  //       cart.map((item) => item._id === productExist._id
  //       ? { ...oneProduct, quantity : oneProduct.quantity + 1 } 
  //       : item 
  //     ));
  //   }else{
  //     setCartItem([...cart, { ...oneProduct, quantity: 1 }])
  //   }
  //   console.log(cart)
  // }