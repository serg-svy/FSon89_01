export const Product = ({ title, price, discount }) => {
  const productBg = discount ? 'rgb(151,230,5)' : '#ffff';

  const productStyles = {
    border: '1px solid black',
    padding: '10px',
    backgroundColor: productBg,
    borderRadius: '10px',
  };

  return (
    <div style={productStyles}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
      />
      <h2>{title}</h2>
      {discount ? (
        <h3> Discount: {discount}$</h3>
      ) : (
        <p>Sorry, but discount on this type of product has expired !</p>
      )}
      <p>{price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
