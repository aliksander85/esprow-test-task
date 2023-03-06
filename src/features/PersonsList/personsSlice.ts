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
	itemIds: string[];
	editedPerson: PersonType | null;
	filterByName: string;
	sortedByName: Sorting | null;
};

const personsById: Record<string, PersonType> = {};
const ids: string[] = [];

data.forEach((person) => {
	personsById[person.id] = person;
	ids.push(person.id);
});

const initialState: PersonsState = {
	items: personsById,
	itemIds: ids,
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
export const itemIds = (state: RootState) => state.persons.itemIds;
export const filterByName = (state: RootState) => state.persons.filterByName;
export const sortByName = (state: RootState) => state.persons.sortedByName;
export const fetchPersons = createSelector(
	[itemsById, itemIds, filterByName, sortByName],
	(items, ids, filter, sort) => {
		if (sort === null && filter === '') {
			return ids;
		}

		let filteredList = ids;

		if (filter !== '') {
			filteredList = ids.filter((id) =>
				items[id].name.toLowerCase().includes(filter.toLowerCase())
			);
		}

		if (sort === Sorting.ASCENDING || sort === Sorting.DESCENDING) {
			return filteredList.slice().sort((a, b) => {
				if (sort === Sorting.ASCENDING) {
					return items[a].name.localeCompare(items[b].name);
				}
				return items[b].name.localeCompare(items[a].name);
			});
		}

		return filteredList;
	}
);

export default personsSlice.reducer;
