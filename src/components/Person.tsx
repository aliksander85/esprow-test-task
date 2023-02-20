import React from 'react';
import { PersonType } from '../features/PersonsList/personsSlice';

type PersonProps = {
	person: PersonType;
};

function Person({ person }: PersonProps) {
	return (
		<li className="persons__person person">
			<h3>{person.name}</h3>
		</li>
	);
}

export default Person;
