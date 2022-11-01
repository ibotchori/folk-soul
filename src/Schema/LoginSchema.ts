import * as yup from 'yup'

export interface LoginInputTypes {
  username: string
  password: string
}

export const LoginSchema = yup
  .object({
    username: yup
      .string()
      .required('usernameRequired')
      .min(3, 'usernameAtLeast')
      .max(20, 'usernameMax'),
    password: yup
      .string()
      .required('passwordRequired')
      .min(3, 'passwordAtLeast')
      .max(20, 'passwordMax'),
  })
  .required()
