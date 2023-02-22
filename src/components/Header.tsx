import React from 'react';
import FilterByName from '../features/FilterByName/FilterByName';
import SortByName from '../features/SortByName/SortByName';

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<FilterByName />
				<SortByName />
			</div>
		</header>
	);
}

export default Header;
