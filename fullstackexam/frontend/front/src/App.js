import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/singprod';
import CategoriesPage from './components/cats';
import OrdersByStatusPage from './components/status';
import CustomerPage from './components/custdetails';
import OrderDetailsPage from './components/orddetes';



function App() {
  return (
    <Router>
      <header className="App-header">

        <Routes>

          <Route path="/product/:category" element={<CategoryPage />} />
          <Route path="/category" element={<CategoriesPage />} />
          <Route path="/order" element={<OrdersByStatusPage />} />
          <Route path="/customer/:id" element={<CustomerPage />} />
          <Route path="/order/:id" element={<OrderDetailsPage />} />
          <Route path="/orderitem/:id" element={<OrderDetailsPage />} />

          
        </Routes>
      </header>
    </Router>
  );
}


export default App;
