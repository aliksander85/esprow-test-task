import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
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

export enum Sorting {
	ASCENDING = 'ascending',
	DESCENDING = 'descending',
}

type PersonsState = {
	items: Record<string, PersonType>;
	editedPerson: PersonType | null;
	filterByName: string;
	sortedByName: Sorting | null;
};

const personsById: Record<string, PersonType> = {};

data.forEach((person) => {
	personsById[person.id] = person;
});

const initialState: PersonsState = {
	items: personsById,
	editedPerson: null,
	filterByName: '',
	sortedByName: null,
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
		setFilterByName: (state, action: PayloadAction<string>) => {
			state.filterByName = action.payload;
		},
		setSortingByName: (state, action: PayloadAction<Sorting>) => {
			state.sortedByName = action.payload;
		},
	},
});

export const {
	selectPerson,
	updatePerson,
	cancelPersonEditing,
	setFilterByName,
	setSortingByName,
} = personsSlice.actions;

export const itemsById = (state: RootState) => state.persons.items;
export const filterByName = (state: RootState) => state.persons.filterByName;
export const sortByName = (state: RootState) => state.persons.sortedByName;
export const fetchPersons = createSelector(
	[itemsById, filterByName, sortByName],
	(items, filter, sort) => {
		return Object.keys(items)
			.map((id) => items[id])
			.filter((item) =>
				item.name.toLowerCase().includes(filter.toLowerCase())
			)
			.sort((a, b) => {
				if (sort === Sorting.ASCENDING) {
					return a.name.localeCompare(b.name);
				}
				return b.name.localeCompare(a.name);
			});
	}
);

export default personsSlice.reducer;
