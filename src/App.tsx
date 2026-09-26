import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CategoryPage from "./pages/CategoryPage";
import MyCartPage from "./pages/MyCartPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import OrderFinishedPage from "./pages/OrderFinishedPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import MyOrderDetailsPage from "./pages/MyOrderDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cosmetic/:slug" element={<DetailsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/cart" element={<MyCartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-finished" element={<OrderFinishedPage />} />
        <Route path="/check-order" element={<MyOrdersPage />} />
        <Route path="/my-order" element={<MyOrderDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
