import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import "./styles/Main.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Container from "./components/layout/Container/Container";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Container>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/category/:query" element={<Product />} />
        </Routes>
        <Footer />
      </Container>
    </CartProvider>
  );
}

export default App;
