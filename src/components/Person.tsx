import React from 'react';
import { PersonType } from '../features/PersonsList/personsSlice';
import ImageLoader from './ImageLoader';

type PersonProps = {
	person: PersonType;
};

function Person({ person }: PersonProps) {
	return (
		<li className="persons__person person">
			<ImageLoader src={person.picture} alt={person.name} />
			<div className="person__info">
				<h3>{person.name}</h3>
				<p>
					<b>Age: </b>
					{person.age}
				</p>
				<p>
					<b>Address: </b>
					{person.address}
				</p>
				<p>
					<b>Email: </b>
					{person.email}
				</p>
				<p>
					<b>About: </b>
					{person.about}
				</p>
				<p>
					<b>Registered at: </b>
					{new Date(person.registered).toLocaleDateString()}
				</p>
			</div>
		</li>
	);
}

export default Person;
