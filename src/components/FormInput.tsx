import React from 'react';

type FormInputProps = {
	type: string;
	label: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function formatDate(date: string) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}

function FormInput({ type, label, value, onChange }: FormInputProps) {
	let formattedValue = value;

	if (type === 'date' && typeof value === 'string') {
		formattedValue = formatDate(value);
	}

	return (
		<label className="edit-form__label">
			<span className="edit-form__label-text">{label}:</span>
			<input
				className="edit-form__input"
				type={type}
				value={formattedValue}
				onChange={onChange}
			/>
		</label>
	);
}

export default FormInput;
