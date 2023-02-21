import React from 'react';

type FormRadioGroupProps = {
	label: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormRadioGroup({ label, checked, onChange }: FormRadioGroupProps) {
	return (
		<fieldset>
			<legend>{label}:</legend>
			<div>
				<input
					type="radio"
					id="yes"
					value="yes"
					checked={checked}
					onChange={onChange}
				/>
				<label htmlFor="yes">Yes</label>
			</div>
			<div>
				<input
					type="radio"
					id="no"
					value="no"
					checked={!checked}
					onChange={onChange}
				/>
				<label htmlFor="no">No</label>
			</div>
		</fieldset>
	);
}

export default FormRadioGroup;
