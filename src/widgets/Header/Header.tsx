import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLazyLogoutQuery } from '../../store/api';

export const Header = () => {
	const navigate = useNavigate();
	let authToken = Cookies.get('token');
	const [logout, { isSuccess }] = useLazyLogoutQuery();

	const handleAboutUs = () => {
		navigate('/');
	};

	const handleLogin = () => {
		navigate('/signin');
	};

	const handleProfile = () => {
		navigate('/profile');
	};

	const handleLogout = () => {
		logout({});
	};

	useEffect(() => {
		if (isSuccess) {
			Cookies.remove('token');
			navigate('/signin');
		}
	}, [isSuccess]);

	return (
		<Box sx={{ display: 'flex', gap: '12px' }}>
			{authToken ? (
				<>
					<Button variant="outlined" onClick={handleAboutUs}>
						About us
					</Button>
					<Button variant="outlined" onClick={handleProfile}>
						Profile
					</Button>
					<Button variant="outlined" onClick={handleLogout}>
						Sign out
					</Button>
				</>
			) : (
				<>
					<Button variant="outlined" onClick={handleAboutUs}>
						About us
					</Button>
					<Button variant="outlined" onClick={handleLogin}>
						Sign in
					</Button>
				</>
			)}
		</Box>
	);
};
