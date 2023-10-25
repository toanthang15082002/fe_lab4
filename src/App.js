import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Thêm Link
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import User from "./components/User";
import Home from "./components/Home";
import { Button, Container, Row } from "react-bootstrap";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Link to="/user">
            <Button>Users</Button>
          </Link>
          <Link to="/product">
            <Button>Products</Button>
          </Link>
          <Link to="/cart">
            <Button>Cart</Button>
          </Link>
        </Row>
      </Container>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        {/*<Route path="/product/add" element={<AddProduct />}></Route> */}
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
