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
import { loginCustomer } from '../service/authService';
import { useAppStore } from '@/shared/store/useAppStore';
import { toast } from 'sonner';
import { useStore } from '../store/useStore';

export const LoginForm = () => {
    const { setToken } = useStore();
    const { setLoading, loading } = useStore();
    const getProfile = useStore(state => state.getProfile);
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
        try {
            const response = await loginCustomer(data);
            setToken(response?.data.access_token || '');
            if (response?.status === 200) {
                setLoading(false);
                toast.success(response.message);
                if (onClose) {
                    onClose();
                }
            } else {
                toast.error(response?.message);
            }
            await getProfile();
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Error desconocido';
            toast.error(errorMessage);
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electronico</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='example@example.com'
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
                        {loading ? 'Cargando...' : 'Iniciar sesión'}
                    </Button>
                </form>
            </Form>
        </div>
    );
};
