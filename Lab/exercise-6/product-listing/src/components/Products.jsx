import productsItem from '../data/product.data';

export default function Products() {
  return (
    <div className="products">
      {productsItem.map(({ name, des, discount, discountedPrice, originalPrice, image }, id) => (
        <div className="product" key={id}>

          <div className="image-wrapper">
            <img src={image} alt={name} />
            {discount && <span className="badge">{discount}% OFF</span>}
          </div>

          <div className="content">
            <h1>{name}</h1>
            <p>{des}</p>
            <div className="price">
              <span className="original-price">{originalPrice}</span>
              <span className="discounted-price">{discountedPrice}</span>
            </div>
          </div>

          <button className="buy-btn">Buy Now</button>

        </div>
      ))}
    </div>
  );
}