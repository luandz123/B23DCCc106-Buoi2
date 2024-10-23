import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'sting', price: 10000 },
    { id: 2, name: 'nuoc loc', price: 5000 }
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addProduct, removeProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
