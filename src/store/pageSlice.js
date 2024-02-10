import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    confirmation: {
        show: false,
        data: {}
    },
    cart: false,
    data: [],
},
priceAwal : []
};
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    showModalsConfirmation(state,data) {
        state.modals.confirmation = data.payload;;
    },
    showModalsCart(state,data) {
        state.modals.cart = data.payload
    },
    setDataCart(state,data) {
        state.modals.data = data.payload
    },
    setPrice(state,data) {
        state.priceAwal = data.payload
    },
  },
});

export const { showModalsConfirmation, showModalsCart, setDataCart, setPrice } =
  pageSlice.actions;
export default pageSlice.reducer;
