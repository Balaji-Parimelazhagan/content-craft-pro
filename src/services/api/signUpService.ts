import api from '../interceptors';
import { useMutation } from '@tanstack/react-query';

export interface ISignUp {
  email: string
} 
const signUpFn = async (signUpBody: ISignUp | undefined) => {
  const response = await api.post(`signup`, signUpBody);
  return response.data;
};

export function signUp() {
  return useMutation<ISignUp, ()=> void, ISignUp, unknown>(['signup'], (signUpBody) => signUpFn(signUpBody), {
    retry: 1
  });
}