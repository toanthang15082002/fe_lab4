import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import User from "./components/User";
import Home from "./components/Home";
import { Button, Container, Row } from "react-bootstrap";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import AddUser from "./components/AddUser";
import Comment from "./components/Comment";
import Login from "./components/Login";
import AddCart from "./components/AddCart";

function App() {
  return (
    <Router>
      <Container>
        <Row className="justify-content-around"> {/* Thêm lớp CSS để căn giữa */}
          {/* <Link to="/login">
            <Button>Login</Button>
          </Link> */}
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
        <Route path="/user" element={<User />}></Route>
        <Route path="/product/:id/comment" element={<Comment />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/addcart" element={<AddCart />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
