import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Header } from '../../widgets/Header/Header';
import { ModalUpdate } from '../../widgets/Modals/ModalUpdate/ModalUpdate';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useLazyGetProfileQuery } from '../../store/api';
import { ProfileInfo } from './components/ProfileInfo';

type InfoDataAuthorType = {
	success: boolean;
	data: {
		name: string;
		authorId: number;
	};
};

type InfoDataQuoteType = {
	success: boolean;
	data: {
		quoteId: number;
		authorId: number;
		quote: string;
	};
};

export const Profile = () => {
	const navigate = useNavigate();
	const [getProfileInfo, { data }] = useLazyGetProfileQuery();
	const [open, setOpen] = useState(false);
	const [infoDataAuthor, setInfoDataAuthor] = useState<InfoDataAuthorType>();
	const [infoDataQuote, setInfoDataQuote] = useState<InfoDataQuoteType>();

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
						<Typography variant="body1">{infoDataAuthor?.data?.name}</Typography>
						<Typography variant="body1">{infoDataQuote?.data?.quote}</Typography>
					</Box>
					<ModalUpdate open={open} setOpen={setOpen} setInfoDataAuthor={setInfoDataAuthor} setInfoDataQuote={setInfoDataQuote} />
				</>
			) : (
				<></>
			)}
		</Box>
	);
};
