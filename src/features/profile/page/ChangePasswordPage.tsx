import { ChangePasswordForm } from '../components/ChangePasswordForm';

export const ChangePasswordPage = () => {
    return (
        <div className='pt-8 pb-14'>
            <div className='mb-10'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF6B35] font-semibold text-sm '>
                        Cambio Contraseña
                    </h1>
                    <span className='text-xs font-medium text-[#2A2A2A] '>
                        Aquí podras cambiar tu contraseña.
                    </span>
                </div>
            </div>
            <ChangePasswordForm />
        </div>
    );
};
