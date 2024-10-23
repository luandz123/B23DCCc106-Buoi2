import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../redux/productSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Danh Sách Hàng Hóa</h2>
      <input
        type="text"
        placeholder="Tìm kiếm hàng hóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} VND
            <button onClick={() => dispatch(removeProduct(product.id))}>Xóa</button>
            <Link to={`/edit/${product.id}`}><button>Chỉnh sửa</button></Link>
          </li>
        ))}
      </ul>
      <Link to="/add">
        <button>Thêm Hàng Hóa</button>
      </Link>
    </div>
  );
};

export default ProductList;