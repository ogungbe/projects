import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CustomerDetailsPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchCustomerData() {
      const customerResponse = await fetch(`http://127.0.0.1:8000/api/customer/${id}/`);
      const customerData = await customerResponse.json();
      setCustomer(customerData);
    }


    async function fetchOrdersData() {
      const ordersResponse = await fetch(`http://127.0.0.1:8000/api/order/?customer=${id}`);
      const ordersData = await ordersResponse.json();
      setOrders(ordersData);
    }


    fetchCustomerData();
    fetchOrdersData();
  }, [id]);


  const displayOrders = () => {
    const matchingOrders = orders.filter(order => order.customer.id === customer.id);
    return matchingOrders.map(order => (
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
    <div className="CustomerDetailsPage">
      <h1>Customer Details</h1>
      <h2>Customer {customer.id}</h2>
      <p>Customer name: {customer.name}</p>
      <p>Customer email: {customer.email}</p>
      <h2>Customer Orders</h2>
      {displayOrders()}
    </div>
  );
}

export default CustomerDetailsPage;