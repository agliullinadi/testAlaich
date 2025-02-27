import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs/AboutUs';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* Главная страница */}
					<Route path={'/'} element={<AboutUs />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
