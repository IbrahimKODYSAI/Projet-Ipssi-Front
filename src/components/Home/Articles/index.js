import React, { useEffect } from "react";
import ".";
import { Link } from "react-router-dom";
import "./articles.scss";

const Articles = ({ getProducts, products, setSortedProducts }) => {
  const sortProducts = () => {
    const sorted = products.sort((a, b) => b.likes - a.likes);
    setSortedProducts(sorted);
  };
  useEffect(() => {
    sortProducts();
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="product_screen">
      {products.slice(0, 12).map((item) => (
        <article key={item._id} className="product">
          <Link to={`/article/${item._id}`} exact="true">
            <img src={`http://localhost:3001/${item.images[0].filePath}`} alt="" />
          </Link>
          <div className="product_info">
            <h3>{item.title.slice(0, 30)}...</h3>
            <span>{item.price} €</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Articles;




/* <Link to="" exact="true">
    <i className="delete fa fa-trash"></i>
  </Link>
  <Link to="" exact="true">
    <i className="update fa fa-wrench"></i>
</Link> */