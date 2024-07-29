import { ExceptionService, HttpAppService } from "@/shared"
import { useMutation, UseMutationResult } from "react-query"
import { IMakeMessagePort, MakeMessageErrors } from "@entities/request-callbacks/interfaces"
import { useMemo } from "react"
import { ValidationRunner } from "@/shared"
import {MakeMessageValidators} from "@entities/request-callbacks/validators";

type IMakeMessageRequest = UseMutationResult<void, ExceptionService<MakeMessageErrors>, IMakeMessagePort>

export const useMakeMessageRequest = (): IMakeMessageRequest => {
	const validatorFactory = useMemo(() => new MakeMessageValidators(), [])
	const validator = useMemo(() => new ValidationRunner(validatorFactory), [validatorFactory])
	
	const callback = async (port: IMakeMessagePort): Promise<void> => {
		validator.validate(port)
		await HttpAppService.post('/', { body: port })
	}
	
	return useMutation(callback, {
		onError: (error) => {
			if (error.data !== undefined) {
				for (const key of Object.keys(error.data)) {
					console.log(key, validatorFactory.getValuesForMessages(key))
				}
			}
		}
	})
}
