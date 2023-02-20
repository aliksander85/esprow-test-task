import React from 'react';
import PersonsList from './features/PersonsList/PersonsList';
import './App.css';

function App() {
	return (
		<>
			<header className="header"></header>
			<main className="main">
				<PersonsList></PersonsList>
			</main>
		</>
	);
}

export default App;
