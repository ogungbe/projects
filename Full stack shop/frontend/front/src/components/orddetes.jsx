import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetailsPage() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    async function fetchOrderData() {
      const orderResponse = await fetch(`http://127.0.0.1:8000/api/order/${id}/`);
      const orderData = await orderResponse.json();
      setOrder(orderData);
    }

    async function fetchOrderItemsData() {
      const orderItemsResponse = await fetch(`http://127.0.0.1:8000/api/orderitem/?order=${id}`);
      const orderItemsData = await orderItemsResponse.json();
      setOrderItems(orderItemsData);
    }

    fetchOrderData();
    fetchOrderItemsData();
  }, [id]);

  const displayOrderItems = () => {
    return orderItems.map(orderItem => (
      <div key={orderItem.id}>
        <h3>{orderItem.product.name}</h3>
        <p>Quantity: {orderItem.quantity}</p>
        <p>Price per item: {orderItem.product.price}</p>
        <p>Total price: {orderItem.product.price * orderItem.quantity}</p>
      </div>
    ));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (orderItems.length > 0) {
      orderItems.forEach(orderItem => {
        if (orderItem.product && orderItem.product.price && orderItem.quantity) {
          totalPrice += orderItem.product.price * orderItem.quantity;
        } else {
          console.log("Invalid order item:", orderItem);
        }
      });
    } else {
      console.log("No order items found");
    }
    console.log("Total Price:", totalPrice);
    return totalPrice;
  };
  

  return (
    <div className="OrderDetailsPage">
      <h1>Order Details</h1>
      <h2>Order #{order.id}</h2>
      <p>Status: {order.status}</p>
      <p>Date ordered: {order.date_ordered}</p>
      <p>Shipping address: {order.shipping_addr}</p>
      <h3>Products Ordered</h3>
      {displayOrderItems()}
      <h3>Total Price: {calculateTotalPrice()}</h3>
    </div>
  );
}

export default OrderDetailsPage;
