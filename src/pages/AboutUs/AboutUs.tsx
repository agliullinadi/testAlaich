import React from 'react';
import { useGetInfoQuery } from '../../store/api';

export const AboutUs = () => {
	const { data } = useGetInfoQuery({});

	return (
		<div>
			{data?.map((el: any) => (
				<div key={el?.id}>{el.id}</div>
			))}
		</div>
	);
};
