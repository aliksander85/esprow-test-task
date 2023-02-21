import React from 'react';
import PersonsList from './features/PersonsList/PersonsList';
import Header from './components/Header';
import EditPerson from './features/EditPerson/EditPerson';
import './App.css';

function App() {
	return (
		<>
			<header className="header">
				<Header />
			</header>
			<main className="main">
				<PersonsList></PersonsList>
				<EditPerson />
			</main>
		</>
	);
}

export default App;
