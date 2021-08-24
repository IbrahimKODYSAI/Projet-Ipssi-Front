import React, { useEffect, useState } from "react";
import "./searchbar.scss"


const SearchBar = ({props}) => {

    const {
        inputChange,
        products,
        foundProducts,
        setFoundedProduct,
    } = props

    // const [productsCat, setProductsCat] = useState([])
    const [inputValue, setInputValue] = useState("")


    const handleOnInputChange = (event) => {
        const { name: fieldName, value: fieldValue } = event.target;
        inputChange(fieldName, fieldValue);
        setInputValue(fieldValue)
        const foundProducts = products.filter((product, index) =>
          product.name.toLowerCase().includes(fieldValue.toLowerCase())
        );

        // const foundProductByCat = products.filter((product) => {
        //     const catFound =product.categories.map((cat) => {
        //        return cat
        //     })
        //     return product.categories[catFound].toLowerCase().includes(fieldValue.toLowerCase())
        // })

        if(fieldValue === "") {
            setFoundedProduct([]);
            // setProductsCat([]);
        }else{

            setFoundedProduct(foundProducts);
            // setProductsCat(foundProductByCat)
        }
        // console.log(foundProductByCat)
        // console.log(foundProducts)
    };

    const clearInput = () => {
        setFoundedProduct([]);
        // setProductsCat([]);
        setInputValue("")
    }

    return (

        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Search..."
                    autoComplete="off"
                    name="inputSearchValue"
                    value={inputValue}
                    onChange={(event) => handleOnInputChange(event)}
                />
                <div className="searchIcon">
                    {foundProducts.length === 0 ?
                        <i className="fa fa-search"></i> :
                        <i className="fa fa-times" onClick={clearInput}></i>
                    }
                </div>
            </div>
            {foundProducts.length !== 0 && (
                <div className="dataResult">
                    {
                        foundProducts.slice(0, 15).map((product, index) => {
                            return <a href={`/article/${product._id}`} key={product._id}>
                                        <p onClick={clearInput} className="dataItem" >{product.name}</p>
                                    </a>
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default SearchBar;