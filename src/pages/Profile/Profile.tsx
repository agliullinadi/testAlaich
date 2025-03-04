import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Header } from '../../widgets/Header/Header';
import { ModalUpdate } from '../../widgets/Modals/ModalUpdate/ModalUpdate';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useLazyGetProfileQuery } from '../../store/api';
import { ProfileInfo } from './components/ProfileInfo';

export const Profile = () => {
	const navigate = useNavigate();
	const [getProfileInfo, { data }] = useLazyGetProfileQuery();
	const [open, setOpen] = useState(false);
	const [infoDataAuthor, setInfoDataAuthor] = useState('');
	const [infoDataQuote, setInfoDataQuote] = useState('');

	let authToken = Cookies.get('token');

	useEffect(() => {
		if (authToken) {
			getProfileInfo({ token: 'fb566635a66295da0c8ad3f467c32dcf' });
		} else {
			navigate('/signin');
		}
	}, [authToken]);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
			{data ? (
				<>
					<Header />
					<ProfileInfo fullname={data?.data?.fullname} setOpen={setOpen} />
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
						<Typography variant="body1">{infoDataAuthor}</Typography>
						<Typography variant="body1">{infoDataQuote}</Typography>
					</Box>
					<ModalUpdate open={open} setOpen={setOpen} setInfoDataAuthor={setInfoDataAuthor} setInfoDataQuote={setInfoDataQuote} />
				</>
			) : (
				<></>
			)}
		</Box>
	);
};
