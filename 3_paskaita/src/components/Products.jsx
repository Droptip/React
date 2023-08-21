import React from 'react'
import Product from './components/Product'

const Products = () => {
  const productsData = [
    {category: 'Canvases', name: 'OFF-WHITE AIR JORDAN', price: 32.00-120.00}
    {category: 'Posters', name: 'YEEZY 350 V2 ZEBRA POSTER', price: 16.00-32.00}
    {category: 'Stickers', name: 'YEZZY BOOST 350 V2 FROZEN', price: 5.00}
    {category: 'Adidas', name: 'ADIDAS YEAZZY POWERSHAPE CALABASAS', price: 16.00-32.00}
    {category: 'Jordans', name: 'AIR JORDAN 4 RED SUEDE', price: 16.00-32.00}
    {category: 'Balenciaga', name: 'BALENCIAGA TRIPLE S', price: 16.00-32.00}
    {category: 'Nike', name: 'NIKE BLAZER MID SAKAI', price: 32.00-80.00}
    {category: 'Artists', name: 'LIL PEEP POSTER', price: 2.00-12.00}
  ];

  return (
    <div className="products">
      <h1>BEST SELLERS</h1>
      {productsData.map ((products, index) => (
        <Products
        key={index}
        category={products.category}
        name={products.name}
        price={products.price}
        />
      ))}
    </div>
  );
};

export default Products;