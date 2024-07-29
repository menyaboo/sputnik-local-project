import { IValidators, IValidatorsFactory, LengthValidator, RequiredValidator, ValidationChain } from "@/shared";
import { IMakeMessagePort } from "@entities/request-callbacks/interfaces";

export class MakeMessageValidators implements IValidatorsFactory<IMakeMessagePort> {
	public properties: Partial<IValidators<keyof IMakeMessagePort>> = {
		name: new ValidationChain([ new RequiredValidator(), new LengthValidator({ max: 255 }) ]),
		email: new ValidationChain([ new RequiredValidator(), new LengthValidator({ max: 65 }) ]),
	};
	
	getValuesForMessages(key: string): Record<string, string> {
		switch(key) {
			case 'name': return { max: '255' }
			case 'email': return { max: '65' }
			default: return {}
		}
	}
}
