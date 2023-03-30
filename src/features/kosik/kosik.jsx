import { createSlice } from "@reduxjs/toolkit";

export const nakupnyKosik = createSlice({
  name: "kosik",
  initialState: {
    nakup: [],
  },
  reducers: {
    pridatProdukt: (state, action) => {
      const { id } = action.payload;
      const existujeVec = state.nakup.find((vec) => vec.id === id);
      if (existujeVec) {
        existujeVec.pocet += 1;
      } else state.nakup.push(action.payload);
    },
    zvysitVec: (state, action) => {
      const id = action.payload;
      const novyKosik = state.nakup.map((vec) =>
        vec.id === id ? { ...vec, pocet: vec.pocet + 1 } : vec
      );
      return {
        ...state,
        nakup: novyKosik,
      };
    },
    znizitVec: (state, action) => {
      const id = action.payload;
      const novyKosik = state.nakup.map((vec) =>
        vec.id === id && vec.pocet > 1 ? { ...vec, pocet: vec.pocet - 1 } : vec
      );
      return {
        ...state,
        nakup: novyKosik,
      };
    },
    vymazatProdukt: (state, action) => {
      const id = action.payload;
      const novyKosik = state.nakup.filter((vec) => vec.id !== id);
      return {
        ...state,
        nakup: novyKosik,
      };
    },
    vymazatKosik: (state) => {
      return {
        ...state,
        nakup: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  napis,
  pridatProdukt,
  vymazatProdukt,
  vymazatKosik,
  zvysitVec,
  znizitVec,
} = nakupnyKosik.actions;

export default nakupnyKosik.reducer;
