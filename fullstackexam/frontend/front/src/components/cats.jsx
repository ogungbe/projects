import React, { useState, useEffect } from 'react';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/category/")
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        console.log(data);
      });
  }, [categories]);

  const displayCategories = () => {
    if (categories.length === 0) {
      return <p>Loading...</p>;
    } else {
      return categories.map(category => (
        <li key={category.shortcode}>
          {category.display_name}
        </li>
      ));
    }
  };
  

  return (
    <div className="CategoriesPage">
      <h1>Category list</h1>
      <ul>
        {displayCategories()}
      </ul>
    </div>
  );
}

export default CategoriesPage;
