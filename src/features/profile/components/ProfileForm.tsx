import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { EditIcon } from 'lucide-react';
import { useProfileStore } from '../store/useProfileStore';
import { useEffect, useMemo } from 'react';
import { SpinnerMini } from '@/shared/components/SpinnerMini';
import { customerSchema, type CustomerForm } from '../types/profile.types';

export const ProfileForm = () => {
    const { profile } = useAuthStore();
    const { updateProfile, setIsEditing, isEditing, toggleEditing, isLoading } =
        useProfileStore();
    //utilizar useMemo para evitar que se recalculen los valores por cada renderizado
    const initialValues = useMemo(
        (): CustomerForm => ({
            name: profile?.data.customer.name,
            last_name: profile?.data.customer.last_name,
            dni: profile?.data.customer.dni,
            phone: profile?.data.customer.phone,
            email: profile?.data.email,
        }),
        [profile]
    );

    const form = useForm({
        resolver: zodResolver(customerSchema),
        defaultValues: initialValues,
    });
    const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
            e.preventDefault();
        }
    };
    const onSubmit = async (data: CustomerForm) => {
        // Por ejemplo, podrías llamar a una función para actualizar el perfil
        await updateProfile(data);
    };
    useEffect(() => {
        if (profile?.data?.customer) {
            form.reset(initialValues);
        }
    }, [profile, form, initialValues]);
    return (
        <div className='pt-8 pb-14'>
            <div className='mb-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF6B35] font-semibold text-sm '>
                        Mi Perfil
                    </h1>
                    {!isEditing ? (
                        <p
                            onClick={() => {
                                toggleEditing();
                                setIsEditing(!isEditing);
                            }}
                            className='font-semibold text-sm text-[#FF6B35] cursor-pointer hover:underline underline-offset-4'>
                            <EditIcon className='inline mr-2 size-4' />
                            Editar
                        </p>
                    ) : null}
                </div>
                <span className='text-xs font-medium text-[#2A2A2A] '>
                    Aquí podras encontrar tu información personal.
                </span>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-6'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-sm'>
                                        Nombres
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder='Ingresa tus nombres'
                                            {...field}
                                            className={` ${
                                                isEditing
                                                    ? 'bg-none'
                                                    : 'bg-gray-400/35'
                                            } text-sm py-6 px-4`}
                                            disabled={!isEditing}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='last_name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-sm'>
                                        Apellidos
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder='Ingresa tus apellidos'
                                            {...field}
                                            className={` ${
                                                isEditing
                                                    ? 'bg-none'
                                                    : 'bg-gray-400/35'
                                            } text-sm py-6 px-4`}
                                            disabled={!isEditing}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-sm'>
                                        Correo Electrónico
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='email'
                                            placeholder='example@example.com'
                                            {...field}
                                            className='text-sm bg-gray-400/35 py-6 px-4'
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='dni'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-sm'>
                                        N° de Documento
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder='Ingresa tu documento'
                                            {...field}
                                            className={` ${
                                                isEditing
                                                    ? 'bg-none'
                                                    : 'bg-gray-400/35'
                                            } text-sm py-6 px-4`}
                                            onKeyDown={onKeyDownInput}
                                            disabled={!isEditing}
                                            inputMode='numeric'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-sm'>
                                        Número de celular
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder='Ingresa tu celular'
                                            {...field}
                                            className={` ${
                                                isEditing
                                                    ? 'bg-none'
                                                    : 'bg-gray-400/35'
                                            } text-sm py-6 px-4`}
                                            disabled={!isEditing}
                                            onKeyDown={onKeyDownInput}
                                            inputMode='numeric'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        {isEditing && (
                            <div className='flex items-center justify-center gap-4 mt-10'>
                                <Button
                                    type='button'
                                    onClick={() => {
                                        form.reset(initialValues);
                                        toggleEditing();
                                        setIsEditing(!isEditing);
                                    }}
                                    className=' bg-gray-400/35 text-white hover:bg-gray-400/50 cursor-pointer'>
                                    Cancelar
                                </Button>
                                <Button
                                    type='submit'
                                    className=' bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 cursor-pointer'
                                    disabled={!isEditing || isLoading}>
                                    {isLoading ? (
                                        <>
                                            <SpinnerMini />
                                            guardando...
                                        </>
                                    ) : (
                                        'Guardar Cambios'
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
};
