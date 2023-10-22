import './product.css';

export const Product = ({ title, price, discount }) => {
  const productBg = discount ? 'rgb(151,230,5)' : '#f9bf04';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className="product" style={productStyles}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
        className="productImg"
      />
      <h2>{title}</h2>
      {discount ? (
        <h3 className="discountBage"> Discount: {discount}$</h3>
      ) : (
        <p>Sorry, but discount on this type of product has expired !</p>
      )}
      <p>{price}$</p>
      <button className="productAddToCartBtn" type="button">
        Add to cart
      </button>
    </div>
  );
};
