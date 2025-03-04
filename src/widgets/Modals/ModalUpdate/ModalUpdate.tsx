import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useLazyGetAuthorQuery, useLazyGetQuoteQuery } from '../../../store/api';

type ModalUpdateProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	setInfoDataAuthor: (v: string) => void;
	setInfoDataQuote: (v: string) => void;
};

const style = {
	position: 'absolute',
	top: '20%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	maxWidth: '600px',
	backgroundColor: '#fff',
	padding: '12px',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
};

export const ModalUpdate = ({ open, setOpen, setInfoDataAuthor, setInfoDataQuote }: ModalUpdateProps) => {
	let randomId = Math.floor(Math.random() * 3);

	const [fetchAuthor, { data: dataAuthor, isSuccess: isSuccessAuthor }] = useLazyGetAuthorQuery();
	const [fetchQuote, { data: dataQuote, isSuccess: isSuccessQuote }] = useLazyGetQuoteQuery();

	const fetchAuthorTimeout = useRef(null);
	const fetchQuoteTimeout = useRef(null);

	const handleClose = () => {
		setOpen(false);
		clearTimeouts();
	};

	const clearTimeouts = () => {
		if (fetchAuthorTimeout.current) {
			clearTimeout(fetchAuthorTimeout.current);
		}
		if (fetchQuoteTimeout.current) {
			clearTimeout(fetchQuoteTimeout.current);
		}
	};

	const fetchTimeOutAuthor = () => {
		// @ts-ignore
		fetchAuthorTimeout.current = setTimeout(() => {
			fetchAuthor({});
		}, 5000);
	};

	const fetchTimeOutQuote = () => {
		// @ts-ignore
		fetchQuoteTimeout.current = setTimeout(() => fetchQuote({ authorId: dataAuthor?.data[randomId]?.authorId }), 5000);
	};

	useEffect(() => {
		if (open) {
			fetchTimeOutAuthor();
		}
		return () => clearTimeouts();
	}, [open]);

	useEffect(() => {
		if (isSuccessAuthor && dataAuthor) {
			fetchTimeOutQuote();
			setInfoDataAuthor(dataAuthor?.data[randomId]?.name);
		}
	}, [isSuccessAuthor, dataAuthor]);

	useEffect(() => {
		if (dataQuote) {
			setInfoDataQuote(dataQuote[Math.floor(Math.random() * dataQuote?.length)].quote);
		}
	}, [dataQuote]);

	return (
		<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box sx={style}>
				<Typography variant="h5" component="h5">
					Requesting the quote
				</Typography>
				<Box>
					<Typography variant="body1">Step 1: Requesting author... {isSuccessAuthor ? 'Completed' : ''}</Typography>
					<Typography variant="body1">Step 2: Requesting quote... {isSuccessQuote ? 'Completed' : ''}</Typography>
				</Box>
				<Button onClick={handleClose} type="submit" variant="contained" color="primary" sx={{ width: 'fit-content' }}>
					Cancel
				</Button>
			</Box>
		</Modal>
	);
};
