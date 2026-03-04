import productsItem from '../data/products'
export default function Products() {
  return (
    <>
    <div className="products">
    {
        productsItem.map((
            {
                name,
                des,
                discount,
                discountedPrice,
                originalPrice,
                image
            },
            id)=>(
            <div className="product">
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{des}</p>
                <div className="price">
                    <p>{originalPrice}</p>
                    <p>{discountedPrice}</p>
                </div>
                <button>Buy Now</button>
            </div>
        ))
    }
    </div>
    </>
  )
}
