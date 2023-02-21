import React, { ReactNode, useEffect, useCallback } from 'react';

type ModalProps = {
	title: string;
	children: ReactNode;
	onClose: () => void;
};

function Modal({ children, title, onClose }: ModalProps) {
	const closeOnEscapeKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' || e.key === 'Esc') {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
		};
	}, [closeOnEscapeKeyDown]);

	return (
		<div className="modal" onClick={onClose}>
			<div
				className="modal__content"
				onClick={(e) => e.stopPropagation()}
			>
				<header className="modal__header">
					<h2 className="modal__title text-center">{title}</h2>
				</header>
				<main className="modal__body">{children}</main>
			</div>
		</div>
	);
}

export default Modal;
