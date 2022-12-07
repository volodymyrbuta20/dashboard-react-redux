import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const createCustomSlice = (name) => {
    const {
        actions: { add, remove, reorder, update },
        reducer
    } = createSlice({
        name,
        initialState,
        reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        update(state, action) {
            state.splice(action.payload.destination.index, 0,  action.payload.filterState);
        },
        remove(state, action) {
            const index = state.findIndex(({ id }) => id === action.payload);
            state.splice(index, 1);
        },
        reorder(state, action) {
            const [removed] = state.splice(action.payload.source.index, 1);
            state.splice(action.payload.destination.index, 0, removed);
        }
    }
  });

  return {
    actions: { add, remove, reorder, update },
    reducer
  };
};