import React, { useState } from 'react';
import FallbackImage from './FallbackImage';

type ImageLoaderProps = {
	src: string;
	alt: string;
};

function ImageLoader({ src, alt = 'user', ...rest }: ImageLoaderProps) {
	const [isError, setIsError] = useState(false);

	const errorHandler = () => {
		setIsError(true);
	};

	return (
		<div
			className="image-loader-container person__image-container"
			{...rest}
		>
			{isError ? (
				<FallbackImage />
			) : (
				<img
					className="person__image"
					loading="lazy"
					src={src}
					alt={alt}
					onError={errorHandler}
				/>
			)}
		</div>
	);
}

export default ImageLoader;
