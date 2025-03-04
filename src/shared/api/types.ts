export type GetInfoResponse = {
	success: boolean;
	data: {
		info: string;
	};
};

export type GetProfileResponse = {
	success: boolean;
	data: {
		fullname: string;
		email: string;
	};
};

export type GetLoginResponse = {
	success: boolean;
	data: {
		token: string;
	};
};

export type GetLoginRequestData = {
	password: string;
	email: string;
};

export type GetProfileParams = {
	token: string;
};

export type GetAuthorResponse = {
	success: boolean;
	data: {
		authorId: number;
		name: string;
	};
};

export type GetQuoteResponse = {
	success: boolean;
	data: {
		quoteId: number;
		authorId: number;
		quote: string;
	};
};

export type GetLogoutResponse = {
	success: boolean;
	data?: {};
};
