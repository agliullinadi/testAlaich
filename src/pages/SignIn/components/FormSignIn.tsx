import React, { useEffect, useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLoginMutation } from '../../../store/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const FormSignIn = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [loginUser, { isSuccess }] = useLoginMutation();

	const handleSubmitForm = (e: any) => {
		e.preventDefault();
		loginUser({ email: email, password: password });
	};

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	useEffect(() => {
		if (isSuccess) {
			Cookies.set('token', 'fb566635a66295da0c8ad3f467c32dcf');
			navigate('/profile');
		}
	}, [isSuccess]);

	return (
		<form onSubmit={handleSubmitForm} style={{ display: 'flex', gap: '12px', flexDirection: 'column', maxWidth: '500px' }}>
			<TextField
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				label="Email address"
				placeholder="Enter email"
				type="email"
				variant="outlined"
			/>
			<TextField
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				label="Password"
				placeholder="password"
				type={showPassword ? 'text' : 'password'}
				variant="outlined"
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={togglePasswordVisibility} edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					},
				}}
			/>
			<Button type="submit" variant="contained" color="primary" sx={{ width: 'fit-content' }}>
				Submit
			</Button>
		</form>
	);
};
