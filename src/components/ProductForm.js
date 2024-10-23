import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/productSlice';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editProduct({ ...product, id }));
    } else {
      dispatch(addProduct({ ...product, id: new Date().getTime() }));
    }
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Giá"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <button type="submit">Lưu</button>
      <button type="button" onClick={handleBack}>Quay lại</button>
    </form>
  );
};

export default ProductForm;