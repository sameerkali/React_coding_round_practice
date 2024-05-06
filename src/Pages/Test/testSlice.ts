import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  number: number;
}

const initialState: TestState = {
  number: 0
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
      console.log(state.number);
    },
    decrement: (state) => {
      state.number -= 1;
      console.log(state.number);
    },
    setNumber: (state, action: PayloadAction<{ number: number }>) => {
      state.number = action.payload.number;
    }
  }
});

export const { increment, decrement, setNumber } = testSlice.actions;

export default testSlice.reducer;
