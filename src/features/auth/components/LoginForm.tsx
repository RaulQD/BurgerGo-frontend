import { Button } from '@/components/ui/button';
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
import { loginSchema, type LoginFormData } from '../types/auth.types';
import { useAppStore } from '@/shared/store/useAppStore';
import { useAuthStore } from '../store/useAuthStore';
import { SpinnerMini } from '@/shared/components/SpinnerMini';

export const LoginForm = () => {
    const loading = useAuthStore((state) => state.loading);
    const login = useAuthStore((state) => state.login);
    const onClose = useAppStore((state) => state.onClose);
    const initialValues: LoginFormData = {
        email: '',
        password: '',
    };
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: initialValues,
    });
    const onSubmit = async (data: LoginFormData) => {
        await login(data, onClose);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div
                        className={` ${
                            loading ? 'pointer-events-none opacity-60' : ' '
                        } flex flex-col gap-4 `}>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electronico</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='email'
                                            placeholder='example@example.com'
                                            autoComplete='email'
                                            disabled={loading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder='*************'
                                            autoComplete='current-password'
                                            disabled={loading}
                                            className={``}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type='submit'
                        className='mt-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white cursor-pointer'
                        disabled={loading}>
                        {loading ? (
                            <div className='flex items-center gap-2'>
                                <SpinnerMini />
                                <span className='text-sm'>Cargando...</span>
                            </div>
                        ) : (
                            'Iniciar sesión'
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
};
