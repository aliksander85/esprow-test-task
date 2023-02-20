import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../data/generated.json';

export type PersonType = {
	id: string;
	isActive: boolean;
	picture: string;
	age: number;
	name: string;
	email: string;
	address: string;
	about: string;
	registered: string;
};

type PersonsState = {
	items: Record<string, PersonType>;
	isLoading: boolean;
	error: string | null;
};

const personsById: Record<string, PersonType> = {};

data.forEach((person) => {
	personsById[person.id] = person;
});

const initialState: PersonsState = {
	items: personsById,
	isLoading: false,
	error: null,
};

const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {
		updatePerson: (state, action: PayloadAction<PersonType>) => {
			state.items[action.payload.id] = action.payload;
		},
	},
});

export const { updatePerson } = personsSlice.actions;

export const fetchPersons = () => {
	return Object.keys(personsById).map((id) => personsById[id]);
};

export default personsSlice.reducer;
