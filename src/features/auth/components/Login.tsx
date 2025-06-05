import { Modal } from '@/shared/components/Modal';
import { LoginForm } from './LoginForm';

export const Login = () => {
    return (
        <div>
            <Modal
                title='Inicia sesión'
                description='Inicia sesión para continuar'
                size='md'>
                <LoginForm />
                <div>
                    <p className='text-center text-sm text-gray-500 mt-4'>
                        ¿No tienes una cuenta?{''}
                        <a
                            href='/customer/account/create'
                            className='text-[#FF6B35] hover:underline'>
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </Modal>
        </div>
    );
};
