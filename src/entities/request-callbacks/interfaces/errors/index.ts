import { IValidationErrors } from '@/shared';
import { IMakeMessagePort } from '../ports';

export type MakeMessageErrors = IValidationErrors<keyof IMakeMessagePort>