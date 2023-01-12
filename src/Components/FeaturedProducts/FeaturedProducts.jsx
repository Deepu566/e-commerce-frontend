import Card from '../Card/Card'
import './FeaturedProduct.scss'
import useFetch from "../../hooks/useFetch"

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio amet, perferendis reprehenderit rerum, saepe necessitatibus recusandae eum id beatae, ex laudantium qui ab vel ipsam? Quibusdam nam minima repellat tenetur.</p>
            </div>
            <div className="bottom">
                {/* {error ?
                    "Somthing went wrong"
                    : (loading ?
                        "loading" :
                        data?.map((item) => (
                            <Card item={item} key={item.id} />))} */}
                {
                    error ?
                        "Something went wrong!" :
                        loading ?
                            "loading" :
                            data?.map((item) => (
                                <Card item={item} key={item.id} />
                            ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
