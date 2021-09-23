import React, { useEffect } from "react";
import ".";
import { Link } from "react-router-dom";
import "./articles.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";


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

  const producted = products.slice(0, 20)
  const [pageNumber, setPageNumber] = useState(0);

  console.log(producted)

  const productsPerPage = 8;
  const pagesVisited =  pageNumber * productsPerPage;

  const displayProducts = producted
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item) => {
      return (
        <article key={item._id} className="product">
              <Link to={`/article/${item._id}`} exact="true">
                <img src={`http://localhost:3001/${item.images[0].filePath}`} alt="" />
              </Link>
              <div className="product_info">
                <h3>{item.title.slice(0, 30)}...</h3>
                <span>{item.price} €</span>
              </div>
        </article>
      )
  })

  const count = Math.ceil(producted.length / productsPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div>
      <div className="product_screen">
          {displayProducts}
      </div>
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={count}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassNane={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
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