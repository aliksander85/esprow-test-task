import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { PersonType, selectPerson } from '../features/PersonsList/personsSlice';
import ImageLoader from './ImageLoader';
import IndicatorActive from './IndicatorActive';

type PersonProps = {
	person: PersonType;
};

function Person({ person }: PersonProps) {
	const dispatch = useAppDispatch();

	const handleClickPerson = () => {
		dispatch(selectPerson(person.id));
	};

	return (
		<li className="persons__person person" onClick={handleClickPerson}>
			<ImageLoader src={person.picture} alt={person.name} />
			<div className="person__info">
				<h3 className="person__title">
					<IndicatorActive isActive={person.isActive} />
					{person.name}
				</h3>
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
