import { BiCartAlt, BiSearch, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import BurgerLogo from '@/assets/burger-logo.webp';
import { useAppStore } from '../store/useAppStore';
import { Login } from '@/features/auth/components/Login';
import { useStore } from '@/features/auth/store/useStore';
import { useEffect } from 'react';

export const Header = () => {
    const onOpen = useAppStore((state) => state.onOpen);
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    const profile = useStore((state) => state.profile);
   
  console.log('Profile:', profile?.last_name);
    useEffect(() => {
        // Aquí podrías hacer algo con el perfil, como cargar datos adicionales
        console.log('Perfil cargado:', profile);
    }, [profile]);
    return (
        <>
            <header className='max-w-7xl mx-auto bg-[#FF6B35] shadow-md rounded-full'>
                <div className=' flex items-center justify-between py-3 px-20 h-14 '>
                    {/* Logo or Title */}
                    <div className='flex items-center gap-8'>
                        <div className='bg-white rounded-full p-1'>
                            <img
                                src={BurgerLogo}
                                alt='Logo'
                                className='cursor-pointer hover:scale-105 transition-transform duration-200 w-9 h-9'
                                onClick={handleLogoClick}
                            />
                        </div>
                        <div className='relative w-[420px]'>
                            <input
                                type='text'
                                placeholder='Buscar...'
                                className='text-gray-700 pl-10 pr-4 py-2.5 w-full rounded-full border-0 bg-white focus:outline-none  text-sm '
                            />
                            <BiSearch className='absolute left-3 top-3 text-lg text-gray-400' />
                        </div>
                    </div>
                    {/* Acciones */}
                    <div className='flex items-center gap-8'>
                        <div className='flex flex-col items-start cursor-pointer'>
                            <p className='text-white font-medium text-sm leading-tight'>
                                Delivery a domicilio
                            </p>
                            <span className='text-white/90 text-xs'>
                                Ingresa tu dirección
                            </span>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <BiUser className='h-5 w-5 text-white' />
                            <div
                                className='flex flex-col justify-between items-start cursor-pointer'
                                // onClick={() => navigate('/customer/account/login')}>
                                onClick={onOpen}>
                                <p className='text-white font-medium text-sm leading-tight'>
                                    Hola, Identifícate
                                </p>
                                <p className='text-white/90 text-xs'>
                                    Inicia sesión
                                </p>
                            </div>
                        </div>
                        <div className='bg-white px-4 py-2.5 rounded-lg cursor-pointer'>
                            <div className='flex items-center gap-2 text-[#FF6B35]'>
                                <BiCartAlt className='h-5 w-5' />
                                <p className='text-sm font-semibold'>S/0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Login />
        </>
    );
};
