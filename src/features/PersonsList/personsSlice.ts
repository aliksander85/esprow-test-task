import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
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
	editedPerson: PersonType | null;
};

const personsById: Record<string, PersonType> = {};

data.forEach((person) => {
	personsById[person.id] = person;
});

const initialState: PersonsState = {
	items: personsById,
	editedPerson: null,
};

const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {
		selectPerson: (state, action: PayloadAction<string>) => {
			state.editedPerson = state.items[action.payload];
		},
		cancelPersonEditing: (state) => {
			state.editedPerson = null;
		},
		updatePerson: (state, action: PayloadAction<PersonType>) => {
			state.items[action.payload.id] = action.payload;
			state.editedPerson = null;
		},
	},
});

export const { selectPerson, updatePerson, cancelPersonEditing } =
	personsSlice.actions;

export const itemsById = (state: RootState) => state.persons.items;
export const fetchPersons = createSelector([itemsById], (items) => {
	return Object.keys(items).map((id) => items[id]);
});

export default personsSlice.reducer;
