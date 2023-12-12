import { ISuccessMessage } from '../../types/signupValidate.types';
import api from '../interceptors';
import { useMutation } from '@tanstack/react-query';

export interface ISignUpValidate {
  link: string | undefined
} 
const signUpValidateFn = async (signUpValidateBody: ISignUpValidate) => {
  const response = await api.post(`signup/validate`, signUpValidateBody);
  return response.data;
};

export function signUpValidate() {
  return useMutation<ISuccessMessage, ()=> void, ISignUpValidate, unknown>(
    ['signup-validate'],
    (signUpValidateBody: ISignUpValidate) => signUpValidateFn(signUpValidateBody),
    {
      retry: 1,
    }
  );
}