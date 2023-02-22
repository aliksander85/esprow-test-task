import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Sorting, setSortingByName } from '../PersonsList/personsSlice';

function SortByName() {
	const dispatch = useAppDispatch();
	const sortedByName = useAppSelector((state) => state.persons.sortedByName);

	const arrowUp = <span>&uarr;</span>;
	const arrowDown = <span>&darr;</span>;
	const unsorted = <span>&#9776;</span>;

	const handleClickSort = () => {
		if (sortedByName === Sorting.ASCENDING) {
			dispatch(setSortingByName(Sorting.DESCENDING));
			return;
		}
		dispatch(setSortingByName(Sorting.ASCENDING));
	};

	return (
		<div className="sorting">
			<span>Sort by name: </span>
			<button
				className="sorting__button"
				onClick={handleClickSort}
				title="change sorting"
			>
				{sortedByName === Sorting.ASCENDING && arrowUp}
				{sortedByName === Sorting.DESCENDING && arrowDown}
				{!sortedByName && unsorted}
			</button>
		</div>
	);
}

export default SortByName;
