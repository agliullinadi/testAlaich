import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* Главная страница */}
					<Route path={'/'} element={<AboutUs />} />
					{/* Страница Логина */}
					<Route path={'/signin'} element={<SignIn />} />
					{/* Страница Профиля */}
					<Route path={'/profile'} element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
