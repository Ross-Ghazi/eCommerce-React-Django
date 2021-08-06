import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const url = "/api/products";

      //Using axios
      // const { data } = await axios.get(url);

      //using fetch
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Latest product </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
