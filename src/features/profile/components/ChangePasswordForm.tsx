import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import {
    changePasswordSchema,
    type ChangePassWordForm,
} from '../types/profile.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordField } from './PasswordField';
import { useProfileStore } from '../store/useProfileStore';
import { SpinnerMini } from '@/shared/components/SpinnerMini';
export const ChangePasswordForm = () => {
    const { isLoading, changePassword } = useProfileStore();
    const initialValues: ChangePassWordForm = {
        currentPassword: '',
        newPassword: '',
        confirmedPassword: '',
    };
    const form = useForm({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: ChangePassWordForm) => {
        await changePassword(data);
        form.reset();
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6'>
                    <FormField
                        control={form.control}
                        name='currentPassword'
                        render={({ field }) => (
                            <PasswordField
                                field={field}
                                label='Contraseña Actual'
                                placeholder='Ingresa tu contraseña actual'
                                error={
                                    form.formState.errors.currentPassword
                                        ?.message
                                }
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='newPassword'
                        render={({ field }) => (
                            <PasswordField
                                field={field}
                                label='Nueva Contraseña'
                                placeholder='Ingresa tu nueva contraseña'
                                error={
                                    form.formState.errors.newPassword?.message
                                }
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='confirmedPassword'
                        render={({ field }) => (
                            <PasswordField
                                field={field}
                                label='Confirmar Nueva Contraseña'
                                placeholder='Confirma tu nueva contraseña'
                                error={
                                    form.formState.errors.confirmedPassword
                                        ?.message
                                }
                            />
                        )}
                    />
                </div>
                <div className='mt-10 flex justify-center'>
                    <Button
                        type='submit'
                        className=' bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 cursor-pointer'
                        disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <SpinnerMini />
                                Cambiando contraseña
                            </>
                        ) : (
                            ' Cambiar Contraseña'
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
