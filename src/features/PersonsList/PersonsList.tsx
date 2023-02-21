import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Person from '../../components/Person';
import { fetchPersons } from './personsSlice';

function PersonsList() {
	const items = useAppSelector(fetchPersons);

	return (
		<>
			<ul className="main__persons persons">
				{items.map((person) => (
					<Person person={person} key={person.id}></Person>
				))}
			</ul>
		</>
	);
}

export default PersonsList;
