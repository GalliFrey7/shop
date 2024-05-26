import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
//import images
import bannermens from "./assets/bannermens.png"
import bannerkids from "./assets/bannerkids.png"
import bannerwomens from "./assets/bannerwomens.png"

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} category/>
          <Route path="/mens" element={<Category category="men" banner={bannermens}/>}/>
          <Route path="/womens" element={<Category category="women" banner={bannerwomens}/>}/>
          <Route path="/kids" element={<Category category="kid" banner={bannerkids}/>}/>
          <Route path="/product/:productId" element={<Product />} />
          
          <Route/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}