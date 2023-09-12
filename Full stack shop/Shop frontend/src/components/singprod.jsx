import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/category/${category}/`)
      .then(response => response.json())
      .then(data => setCategoryData(data))
      .catch(error => console.error(`Error fetching category ${category}:`, error));

    fetch(`http://127.0.0.1:8000/api/product/?category=${category}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(`Error fetching products for category ${category}:`, error));

    setIsLoaded(true);
  }, [category]);

  const displayCategoryInfo = () => {
    if (categoryData) {
      return (
        <div>
          <h1>{categoryData.display_name}</h1>
          <p>{categoryData.shortcode}</p>
        </div>
      );
    }
  };

  const displayProducts = () => {
    return products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    ));
  };

  if (isLoaded) {
    return (
      <div className="CategoryPage">
        {displayCategoryInfo()}
        {displayProducts()}
      </div>
    );
  } else {
    return (
      <div className="CategoryPage">
        <img src="load.jpeg" alt="Loading p" />
      </div>
    );
  }
}

export default CategoryPage;
