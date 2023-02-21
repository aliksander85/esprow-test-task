import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { cancelPersonEditing, updatePerson } from '../PersonsList/personsSlice';
import Modal from '../../components/Modal';
import FormInput from '../../components/FormInput';
import FormTextarea from '../../components/FormTextarea';
import FormRadioGroup from '../../components/FormRadioGroup';

function EditPerson() {
	const dispatch = useAppDispatch();
	const selectedPerson = useAppSelector(
		(state) => state.persons.editedPerson
	);
	const [name, setName] = useState('');
	const [registered, setRegistered] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState(0);
	const [about, setAbout] = useState('');
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setName(selectedPerson?.name || '');
		setRegistered(selectedPerson?.registered || '');
		setAddress(selectedPerson?.address || '');
		setEmail(selectedPerson?.email || '');
		setAge(selectedPerson?.age || 0);
		setAbout(selectedPerson?.about || '');
		setIsActive(selectedPerson?.isActive || false);
	}, [selectedPerson]);

	const save = () => {
		if (!selectedPerson) {
			return;
		}
		dispatch(
			updatePerson({
				name,
				address,
				age,
				email,
				registered,
				about,
				isActive,
				id: selectedPerson.id,
				picture: selectedPerson?.picture,
			})
		);
	};
	const cancel = () => {
		dispatch(cancelPersonEditing());
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		save();
	};
	const handleCancel = () => {
		cancel();
	};
	const handleClose = () => {
		cancel();
	};

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleChangeRegistered = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegistered(e.target.value);
	};
	const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value);
	};
	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAge(e.target.valueAsNumber);
	};
	const handleChangeAbout = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setAbout(e.target.value);
	};
	const handleChangeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = false;
		if (e.target.value === 'yes') {
			value = true;
		}
		setIsActive(value);
	};

	if (!selectedPerson) {
		return null;
	}

	return (
		<>
			{selectedPerson && (
				<Modal
					title={`Edit ${selectedPerson.name}'s data`}
					onClose={handleClose}
				>
					<form onSubmit={handleSubmit} className="edit-form">
						<div className="edit-form__row">
							<FormInput
								type="text"
								label="Name"
								value={name}
								onChange={handleChangeName}
							/>
						</div>
						<div className="edit-form__row">
							<FormInput
								type="date"
								label="Registered at"
								value={registered}
								onChange={handleChangeRegistered}
							/>
						</div>
						<div className="edit-form__row">
							<FormInput
								type="text"
								label="Address"
								value={address}
								onChange={handleChangeAddress}
							/>
						</div>
						<div className="edit-form__row">
							<FormInput
								type="number"
								label="Age"
								value={age}
								onChange={handleChangeAge}
							/>
						</div>
						<div className="edit-form__row">
							<FormInput
								type="text"
								label="Email"
								value={email}
								onChange={handleChangeEmail}
							/>
						</div>
						<div className="edit-form__row">
							<FormTextarea
								label="About"
								value={about}
								onChange={handleChangeAbout}
							/>
						</div>
						<div className="edit-form__row">
							<FormRadioGroup
								label="Person is active"
								checked={isActive}
								onChange={handleChangeIsActive}
							/>
						</div>
						<footer className="edit-form__footer">
							<input type="submit" value="Submit" />
							<button onClick={handleCancel}>Cancel</button>
						</footer>
					</form>
				</Modal>
			)}
		</>
	);
}

export default EditPerson;
