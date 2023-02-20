import { configureStore } from '@reduxjs/toolkit';
import personsReducer from '../features/PersonsList/personsSlice';

export const store = configureStore({
	reducer: {
		persons: personsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
