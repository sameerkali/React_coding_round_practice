import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
  data: any;
  name: string;
  profileImage: any;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 1,
  data: {},
  name: "",
  profileImage: null
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    saveUserDetail: (state, action: PayloadAction<any>) => {
      state.name = action.payload?.name ?? "";
      state.profileImage = action.payload?.profileImage ?? "";
      console.log(action.payload, "INSIDE REDUCER");
    }
  }
});

export const { increment, decrement, incrementByAmount, saveUserDetail } =
  counterSlice.actions;

export default counterSlice.reducer;
