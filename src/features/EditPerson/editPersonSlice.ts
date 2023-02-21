import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const editPersonSlice = createSlice({
	name: 'editPerson',
	initialState,
	reducers: {
		getUserById: (state, action: PayloadAction<string>) => {},
	},
});
