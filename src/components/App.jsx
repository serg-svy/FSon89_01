import { Product } from './Product';
import css from './Product.module.css';

const productsData = [
  {
    id: '3',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '1',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '2',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
];

export const App = () => {
  return (
    <section>
      <div className={css.product}>....</div>
      <h1>Hello FSon89🥳</h1>

      {productsData.map(product => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        );
      })}
    </section>
  );
};

const Statistics = ({ stats, title }) => {
  return <section></section>;
};
