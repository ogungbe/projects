import React, { useState, useEffect } from 'react';

function OrdersByStatusPage() {
  const [status, setStatus] = useState('');
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/order/?status=${status}`);
    const data = await response.json();
    setOrders(data);
    setIsLoaded(true);
  };

  const displayOrders = () => {
    return orders.map(order => (
      <div key={order.id}>
        <h2>Order #{order.id}</h2>
        <p>Order status: {order.status}</p>
        <p> address: {order.shipping_addr}</p>
        <p> customer: {order.customer}</p>
        <p> ordered: {order.date_ordered}</p>
      </div>
    ));
  };
  return (
    <div className="OrdersByStatusPage">
      <h1>View Orders by Status</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={handleChange}>
          <option value="">--Select a status--</option>
          <option value="O">Ordered</option>
          <option value="P">Processing</option>
          <option value="S">Shipped</option>
          <option value="D">Delivered</option>
        </select>
        <button type="submit">View Orders</button>
      </form>

      {isLoaded ? (
        <div>
          <h2>Orders by status: {status}</h2>
          {displayOrders()}
        </div>
      ) : (
        <div>
          <img src="load.jpeg" alt="Loading" />
        </div>
      )}
    </div>
  );
}

export default OrdersByStatusPage;
