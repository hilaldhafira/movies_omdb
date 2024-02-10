import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: {
    get: false,
    post: false,
    put: false,
    delete: false,
  },
};
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    getFetchingAction(state, data) {
      state.loading.get = true;
    },
    getFetchingSuccess(state) {
      state.loading.get = false;
    },
    getFetchingFailed(state) {
      state.loading.get = false;
    },
  },
});

export const { getFetchingAction, getFetchingSuccess, getFetchingFailed } =
  pageSlice.actions;
export default pageSlice.reducer;
