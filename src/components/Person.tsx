import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectPerson } from '../features/PersonsList/personsSlice';
import ImageLoader from './ImageLoader';
import IndicatorActive from './IndicatorActive';

type PersonProps = {
	id: string;
};

const Person = memo(({ id }: PersonProps) => {
	const dispatch = useAppDispatch();
	const person = useAppSelector((state) => state.persons.items[id]);

	const handleClickPerson = () => {
		dispatch(selectPerson(id));
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
});

export default Person;
