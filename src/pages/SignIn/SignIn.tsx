import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../widgets/Header/Header';
import { FormSignIn } from './components/FormSignIn';

export const SignIn = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
			<Header />
			<FormSignIn />
		</Box>
	);
};
