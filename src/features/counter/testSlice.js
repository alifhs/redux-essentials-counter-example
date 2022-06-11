import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
    name: 'x',
    initialState: {
      results : [1,2,4,5,6,7,8,9,10],
    },
    reducers: {
      addCart: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.results.push(action.payload);
      },
      removeCart: (state, action) => {
        state.results = state.results.filter(item => item !== action.payload);
      },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload
    //   },
    },
  })

  export const { addCart, removeCart } = testSlice.actions;
  export const selectResults = (state) => state.tester.results;
  
export default testSlice.reducer