import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ProductDetail from './components/pages/ProductDetail';
import Services from './components/pages/Services';
import Destinations from './components/pages/Destinations';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

