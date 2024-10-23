import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import GuidePage from './pages/GuidePage';
import './App.css';
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
            <Route path="/guide" element={<GuidePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;