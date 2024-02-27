import { createSlice } from "@reduxjs/toolkit";

const productFilteringSlice = createSlice({
  name: "productFiltering",
  initialState: {
    items: [],
    totalToPay: 0,
  },

  reducers: {
    //addProduct: (state, action) => {},
    //increaseItemQty: (state, action) => {},
    //decreaseItemQty: (state, action) => {},
    //removeProduct: (state, action) => {},
    //clearCart: (state, action) => {},
  },
});

export default productFilteringSlice;
