import React from 'react';
import PersonsList from './features/PersonsList/PersonsList';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<>
			<header className="header">
				<Header />
			</header>
			<main className="main">
				<PersonsList></PersonsList>
			</main>
		</>
	);
}

export default App;
