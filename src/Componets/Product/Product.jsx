// FeaturedProducts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Product.module.scss';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <section className={style.product}>
        <div className={style.containerProduct}>
          <div className={style.containerProductTitle}>
            <h1>Featured Products</h1>
          </div>
          <div className={style.Products}>
            {products.map((product, index) => (
              <div key={index} className={style.ProductItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={style.imageCard}
                />
                <div className={style.cartTitle}>
                  <p>{product.title}</p>
                </div>
                <span>{product.category}</span>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
