export interface IMakeMessagePort {
	name: string;
	email: string;
	message: string;
}

export interface IFeedbackPort {
	name: string | null;
	email: string | null;
	message: string | null;
}

export interface ISendIdeaPort {
	name: string;
	email: string;
	message: string;
}


export interface ITryPort {
	name: string;
	phone: string;
	telegram: string;
	contact: string;
}

 export interface IOrderCallPort {
	name: string;
	phone: string;
	telegram: string;
	timeCall: string;
}
