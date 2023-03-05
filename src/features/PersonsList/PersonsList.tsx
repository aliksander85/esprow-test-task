import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Person from '../../components/Person';
import { fetchPersons } from './personsSlice';

function PersonsList() {
	const itemIds = useAppSelector(fetchPersons);

	return (
		<>
			<ul className="main__persons persons">
				{itemIds.map((id) => (
					<Person id={id} key={id} />
				))}
			</ul>
		</>
	);
}

export default PersonsList;
