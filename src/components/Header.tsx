import React, { useState } from 'react';

function Header() {
	const [filterValue, setFilterValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterValue(e.target.value);
	};

	const handleClick = () => {};

	return (
		<div className="header__container">
			<input
				value={filterValue}
				onChange={handleChange}
				className="header__input"
			/>
			<button onClick={handleClick} className="header__button">
				Search
			</button>
		</div>
	);
}

export default Header;
