import React from 'react';

type FormTextareaProps = {
	label: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function FormTextarea({ label, value, onChange }: FormTextareaProps) {
	return (
		<label className="edit-form__label">
			<span className="edit-form__label-text">{label}:</span>
			<textarea
				className="edit-form__input"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}

export default FormTextarea;
