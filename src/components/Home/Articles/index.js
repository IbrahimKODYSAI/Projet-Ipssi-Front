import React, { useEffect } from "react";
import ".";
import { Link } from "react-router-dom";
import "./articles.scss";

const Articles = ({ products, setSortedProducts }) => {
  const sortProducts = () => {
    const sorted = products.sort((a, b) => b.likes - a.likes);
    setSortedProducts(sorted);
  };

  useEffect(() => {
    sortProducts();
    console.log(new Date());
  });
  return (
    <div>
      <section id="article-section">
        <div className="c-wings c-wings--sm">Articles populaire</div>
        <div className="container1">
          {products.slice(0, 6).map((item) => (
            <article key={item.id} className="container1-article">
              <div className="container1-article_imgbox">
                <Link to={`/article/${item.id}`} exact="true">
                  <img src={item.images[0]} alt="" />
                </Link>
              </div>
              <div className="container1-article_label">
                <h3>{item.title.slice(0, 30)}...</h3>
                <span>{item.price} €</span>
                <Link to="" exact="true">
                  <i className="delete fa fa-trash"></i>
                </Link>
                <Link to="" exact="true">
                  <i className="update fa fa-wrench"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="article-section">
        <div className="c-wings c-wings--sm">Nouveautés</div>
        <div className="container1">
          {products.map((item) => (
            <article key={item.id} className="container1-article">
              <div className="container1-article_imgbox">
                <Link to={`/article/${item.id}`} exact="true">
                  <img src={item.images[0]} alt="" />
                </Link>
              </div>
              <div className="container1-article_label">
                <h3>{item.title.slice(0, 30)}...</h3>
                <span>{item.price} €</span>
                <Link to="" exact="true">
                  <i className="delete fa fa-trash"></i>
                </Link>
                <Link to="" exact="true">
                  <i className="update fa fa-wrench"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <Link to="/admin" exact="true">
          <button>admin</button>
        </Link>
      </section>
    </div>
  );
};

export default Articles;
