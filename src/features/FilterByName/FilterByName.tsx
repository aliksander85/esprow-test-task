import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setFilterByName } from '../PersonsList/personsSlice';

function FilterByName() {
	const dispatch = useAppDispatch();
	const [filterValue, setFilterValue] = useState('');
	const [focused, setFocused] = useState(false);

	const search = useCallback(() => {
		dispatch(setFilterByName(filterValue));
	}, [dispatch, filterValue]);

	const searchByEnterKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (focused && e.key === 'Enter') {
				search();
			}
		},
		[search, focused]
	);

	useEffect(() => {
		document.body.addEventListener('keydown', searchByEnterKeyDown);
		return function cleanup() {
			document.body.removeEventListener('keydown', searchByEnterKeyDown);
		};
	}, [searchByEnterKeyDown]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterValue(e.target.value);
	};
	const handleClick = () => {
		search();
	};
	const handleClickReset = () => {
		setFilterValue('');
		dispatch(setFilterByName(''));
	};
	const handleFocus = () => {
		setFocused(true);
	};
	const handleBlur = () => {
		setFocused(false);
	};

	return (
		<div className="filter">
			<span className="filter__input-container">
				<input
					value={filterValue}
					onChange={handleChange}
					className="filter__input"
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{filterValue.length > 0 && (
					<span
						className="filter__input-reset"
						onClick={handleClickReset}
					>
						&times;
					</span>
				)}
			</span>
			<button onClick={handleClick} className="filter__button">
				Search
			</button>
		</div>
	);
}

export default FilterByName;
