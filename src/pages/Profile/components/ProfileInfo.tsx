import React from 'react';
import { Box, Button, Typography } from '@mui/material';

type ProfileInfoProps = {
	fullname: string;
	setOpen: (open: boolean) => void;
};

export const ProfileInfo = ({ fullname, setOpen }: ProfileInfoProps) => {
	const handleUpdate = () => {
		setOpen(true);
	};

	return (
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
					Welcome {fullname}
				</Typography>
				<Button onClick={handleUpdate} type="submit" variant="contained" color="primary" sx={{ width: 'fit-content' }}>
					Update
				</Button>
			</Box>
		</Box>
	);
};
