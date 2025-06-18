import { z } from "zod";

export const CustomerSchema = z.object({
  "id": z.string().optional(),
  "name": z.string().nonempty({ message: 'El nombre es requerido.' }).min(2, { message: "El nombre debe tener al menos 2 caracteres." }).max(100, { message: "El nombre no puede tener más de 100 caracteres." }).regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'El nombre solo puede contener letras.' }).optional(),
  "last_name": z.string().nonempty({ message: 'El apellido es requerido.' }).min(2, { message: "El apellido debe tener al menos 2 caracteres." }).max(100, { message: "El apellido no puede tener más de 100 caracteres." }).regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'El apellido solo puede contener letras.' }).optional(),
  "address": z.string().optional(),
  "dni": z.string().nonempty({ message: 'El DNI es requerido.' }).min(8, { message: "El DNI debe tener al menos 8 caracteres." }).max(8, { message: "El DNI no puede tener más de 8 caracteres." }).regex(/^\d{8}$/, { message: 'El DNI solo puede contener 8 digitos.' }).optional(),
  "phone": z.string().nonempty({ message: 'El teléfono es requerido.' }).min(9, { message: "El teléfono debe tener al menos 9 caracteres." }).max(9, { message: "El teléfono no puede tener más de 9 caracteres." }).regex(/^9\d{8}$/, { message: 'El telefono debe comenzar con el número 9.' }).optional(),
  "email": z.string().email({ message: 'El correo electrónico no es válido.' }).nonempty({ message: 'El correo electrónico es requerido.' }).max(100, { message: "El correo electrónico no puede tener más de 100 caracteres." }).optional(),
});
export const customerSchema = CustomerSchema.pick({
  "name": true,
  "last_name": true,
  "dni": true,
  "phone": true,
  "email": true,
})

export type Customer = z.infer<typeof CustomerSchema>;
export type CustomerForm = Pick<Customer, 'name' | 'last_name' | 'dni' | 'phone' | 'email'>;


export type CustomerResponse = {
  message: string;
}
export const changePasswordSchema = z.object({
  "currentPassword": z.string().nonempty({ message: 'La contraseña actual es requerida.' }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'La contraseña actual debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.',
  }),
  "newPassword": z.string().nonempty({ message: 'La nueva contraseña es requerida.' }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'La nueva contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.',
  }),
  "confirmedPassword": z.string().nonempty({ message: 'La confirmación de la nueva contraseña es requerida.' }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'La nueva contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.',
  }),
}).refine((data) => data.newPassword === data.confirmedPassword, {
  message: "Las contraseñas no coinciden.",
  path: ["confirmedPassword"],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: "La nueva contraseña no puede ser igual a la contraseña actual.",
  path: ["newPassword"],
})

export type ChangePassword = z.infer<typeof changePasswordSchema>;
export type ChangePassWordForm = Pick<ChangePassword, 'currentPassword' | 'newPassword' | 'confirmedPassword'>;

export const addressTypes = z.enum(['CASA', 'OFICINA', 'OTROS']);

export const addressChema = z.object({
  "id": z.string().optional(),
  "houseType": z.string().optional(),
  "address": z.string().optional()
})
export type Address = z.infer<typeof addressChema>;
export type AddressFormData = Pick<Address, 'houseType' | 'address'>;
export type AddressResponse = {
  message: string;
}