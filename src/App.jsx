import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Home";
import Product from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mens" element={<Category />}/>
          <Route path="/womens" element={<Category />}/>
          <Route path="/kids" element={<Category />}/>
          <Route path="/product" element={<Product />}/>
            <Route path=":productId" element={<Product />}/>
          <Route/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}