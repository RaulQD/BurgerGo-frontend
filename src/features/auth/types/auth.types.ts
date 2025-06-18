import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  username: z.string().nonempty({ message: 'Ingresa tu nombre de usuario.' }).min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres." }),
  email: z.string().nonempty({ message: 'Ingresa tu correo electronico.' }).email({ message: "El correo es invalido." }),
  password: z.string().nonempty({ message: 'Ingresa tu contraseña.' }).min(8, { message: "La contraseña debe tener 8 caracteres." }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: "La contraseña debe tener una letra mayuscula,letra miniscula y un numero" }),
})
export type User = z.infer<typeof userSchema>;
export const CustomerSchema = z.object({
  "id": z.string(),
  "name": z.string(),
  "last_name": z.string(),
  "address": z.string().optional(),
  "dni": z.string(),
  "phone": z.string(),
});
export type Customer = z.infer<typeof CustomerSchema>;

export const RolSchema = z.object({
  "id": z.string(),
  "name": z.string(),
});
export type Rol = z.infer<typeof RolSchema>;
export const ProfileSchema = z.object({
  "id": z.string(),
  "email": z.string(),
  "customer": CustomerSchema,
});
export type Profile = z.infer<typeof ProfileSchema>;
export const CustomerProfileSchema = z.object({
  data: ProfileSchema,
})
export type CustomerProfile = z.infer<typeof CustomerProfileSchema>;



export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});


export type LoginFormData = Pick<User, 'email' | 'password'>;
export type LoginResponse = {
  message: string;
  access_token: string;
}