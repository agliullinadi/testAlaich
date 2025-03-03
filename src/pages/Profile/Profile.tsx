import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Header } from '../../widgets/Header/Header';
import { ModalUpdate } from '../../widgets/Modals/ModalUpdate/ModalUpdate';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useLazyGetProfileQuery } from '../../store/api';

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
	const handleUpdate = () => {
		setOpen(true);
	};

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
					<Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
						<Box>
							<img
								src="https://i.seadn.io/gae/EJ0jGsyn9HqmIilFVwUL-knd-cOEata2lSJSZgHfs_Tsne6cHJeqG1VJWwmSjw3N97_g8onMzw21ZHsA-IBkVw-s7ZsPHrvpCNZvAlI?auto=format&dpr=1&w=1920"
								alt="Avatar"
								style={{ width: '100px', height: '100px', borderRadius: '50%' }}
							/>
						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
							<Typography variant="h4" component="h4">
								Welcome {data?.data?.fullname}
							</Typography>
							<Button onClick={handleUpdate} type="submit" variant="contained" color="primary" sx={{ width: 'fit-content' }}>
								Update
							</Button>
						</Box>
					</Box>
					<Box>{infoDataAuthor?.data?.name}</Box>
					<Box>{infoDataQuote?.data?.quote}</Box>
					<ModalUpdate open={open} setOpen={setOpen} setInfoDataAuthor={setInfoDataAuthor} setInfoDataQuote={setInfoDataQuote} />
				</>
			) : (
				<></>
			)}
		</Box>
	);
};
