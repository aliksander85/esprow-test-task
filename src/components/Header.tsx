import React from 'react';
import FilterByName from '../features/FilterByName/FilterByName';

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<FilterByName />
			</div>
		</header>
	);
}

export default Header;
