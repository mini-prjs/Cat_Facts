import { useEffect, useState } from 'react';
import './App.css';

function App() {

	const [catFact, setCatFact] = useState('');

	const fetchCatFact = async () => {
		const response = await fetch('https://catfact.ninja/fact');
		const data = await response.json();
		setCatFact(data.fact)
	}

	useEffect(() => {
		fetchCatFact()
	}, []);

	return (
		<div className="App">
			<div className="bloc">
				<button onClick={fetchCatFact}>Generate random fact</button>
				<p>{catFact}</p>
			</div>
		</div>
	);
}

export default App;
