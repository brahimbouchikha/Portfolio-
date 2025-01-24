import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import AddProduct from "./pages/AddProduct/AddProduct";
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;