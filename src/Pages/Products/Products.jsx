import React from 'react'
import List from "../../Components/List/List";
import { useState } from 'react'
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import "./Products.scss"

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${catId}`
    );
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };
    return (
        <div className='productsPage'>
            <div className="left">
                <div className="filterItem">
                    <h2>Categories</h2>
                    {
                        data?.map((item) => (

                            <div className="inputItems" key={item.id}>
                                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                        ))
                    }

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItems">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItems">
                        <input type="radio" id='val1' name='radio' onChange={e => setSort("val1")} />
                        <label htmlFor="val1">Price(Lowest First)</label>
                    </div>
                    <div className="inputItems">
                        <input type="radio" id='val2' name='radio' onChange={e => setSort("val2")} />
                        <label htmlFor="val2">Price(Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="catImgContainer">
                    <img className='catImg' src="https://images.unsplash.com/photo-1620161567352-6b3b7404cab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div>
    )
}

export default Products
