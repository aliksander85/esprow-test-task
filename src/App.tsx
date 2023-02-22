import React from 'react';
import PersonsList from './features/PersonsList/PersonsList';
import Header from './components/Header';
import EditPerson from './features/EditPerson/EditPerson';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<h1>Persons List</h1>
				<PersonsList></PersonsList>
				<EditPerson />
			</main>
		</>
	);
}

export default App;
