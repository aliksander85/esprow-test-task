import React from 'react';

type IndicatorActiveProps = {
	isActive: boolean;
};

function IndicatorActive({ isActive }: IndicatorActiveProps) {
	return (
		<div className="indicator">
			<div
				className="indicator__signal"
				style={{ backgroundColor: isActive ? 'green' : 'red' }}
			/>
			<div className="indicator__tooltip">
				{isActive ? 'active' : 'inactive'}
			</div>
		</div>
	);
}

export default IndicatorActive;
