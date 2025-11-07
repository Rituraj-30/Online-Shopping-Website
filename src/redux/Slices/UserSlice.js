import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    info: null,  
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload; 
        },
    clearUserInfo: (state) => {
      state.info = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
