import React from 'react';
import { useGetInfoQuery } from '../../store/api';
import { Box, Typography } from '@mui/material';
import { Header } from '../../widgets/Header/Header';

export const AboutUs = () => {
	const { data } = useGetInfoQuery({});

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
			<Header />
			<Typography variant="h4" component="h4" dangerouslySetInnerHTML={{ __html: data?.data?.info || '' }} />
		</Box>
	);
};
