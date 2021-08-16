import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import { getOrderDetails } from "../actions/orderActions";

function OrderScreen({ match }) {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetail = useSelector((state) => state.orderDetail);
  const { order, error, loading } = orderDetail;

  if (!loading & error) {
    order.itemsPrice = order.orderItems.reduce((total, item) => {
      return (total += item.qty * item.price);
    }, 0);
  }
  useEffect(() => {
    if (!order || order._id !== Number(orderId)) {
      // dispatch(getOrderDetails(orderId));
    }
  }, [order, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Order :{order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>

              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order.user.email}`}> {order.user.email} </a>
              </p>

              <p>
                <strong>adress:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalcode},{" "}
                {order.shippingAddress.country},
              </p>

              {order.isDelivered ? (
                <Message varaint="success">
                  Deilvered on {order.deliveredAt}{" "}
                </Message>
              ) : (
                <Message varaint="warning">Not Deilvered </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>

              <p>
                <strong>Method:</strong>
                {order.paymentMethod}
              </p>

              {order.isPaid ? (
                <Message varaint="success">Paid on {order.paidAt} </Message>
              ) : (
                <Message varaint="warning">Not Paid </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order items</h2>
              {order.orderItems.length === 0 ? (
                <Message varaint="info">Order is empty</Message>
              ) : (
                <ListGroup varaint="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}{" "}
                          </Link>
                        </Col>

                        <Col md={4}>
                          {item.qty} X ${item.price}=$
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summery</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Item:</Col>
                  <Col>${order.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${order.shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${order.taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${order.totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OrderScreen;
