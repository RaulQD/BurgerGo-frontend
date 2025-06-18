import { BiCartAlt, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import BurgerLogo from '@/assets/burger-logo.webp';
import { useAppStore } from '../store/useAppStore';
import { Login } from '@/features/auth/components/Login';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import {
    ChevronDown,
    LogOut,
    MapPin,
    ShoppingBagIcon,
    User,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

export const Header = () => {
    const onOpen = useAppStore((state) => state.onOpen);
    const profile = useAuthStore((state) => state.profile);
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    return (
        <>
            <header className='w-full max-w-7xl mx-auto bg-[#FF6B35] shadow-md rounded-full'>
                <div className='w-full max-w-6xl mx-auto flex items-center justify-between px-4 lg:p-0 h-14 gap-2 lg:gap-8 '>
                    <div className='bg-white rounded-full p-1'>
                        <img
                            src={BurgerLogo}
                            alt='Logo'
                            className='cursor-pointer hover:scale-105 transition-transform duration-200 size-9'
                            onClick={handleLogoClick}
                        />
                    </div>
                    <div className='relative flex-1 w-full  xl:max-w-2xl '>
                        <Input
                            type='text'
                            placeholder='Buscar...'
                            className='text-gray-700 pl-10 w-full py-2.5 h-10 rounded-full border-0 bg-white focus:outline-none text-sm'
                        />
                        <BiSearch className='absolute left-3 top-3 text-lg text-gray-400' />
                    </div>
                    <div className='hidden lg:flex items-center justify-between gap-6 flex-shrink-0 lg:w-sm'>
                        <div className='flex flex-col items-start cursor-pointer'>
                            <p className='text-white font-medium text-xs'>
                                Delivery a domicilio
                            </p>
                            <span className='text-white/90 font-bold text-xs'>
                                {profile?.data.customer.address || 'Ingresa tu dirección'}
                            </span>
                        </div>

                        <div className='mr-10'>
                            {profile ? (
                                <div className='flex flex-col justify-between items-start cursor-pointer'>
                                    <p className='text-white font-medium text-xs'>
                                        Hola, {profile?.data.customer.name}
                                    </p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-white font-bold text-xs'>
                                                    Mi cuenta
                                                </p>
                                                <ChevronDown className='text-white size-4' />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className='w-56'
                                            align='end'>
                                            <DropdownMenuLabel className='capitalize'>
                                                Hola,{' '}
                                                {profile?.data.customer.name}
                                            </DropdownMenuLabel>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => navigate('/account/profile')}>
                                                    <User className='mr-2 h-4 w-4' />
                                                    Mi Perfil
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <ShoppingBagIcon className='mr-2 h-4 w-4' />
                                                    Mis Pedidos
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <MapPin className='mr-2 h-4 w-4' />
                                                    Mis Direcciones
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <LogOut className='mr-2 h-4 w-4' />
                                                Cerrar sesión
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            ) : (
                                <div
                                    className='text-white flex flex-col justify-between items-start cursor-pointer'
                                    onClick={onOpen}>
                                    <p className='text-xs font-medium'>
                                        Hola, Identificate
                                    </p>
                                    <p className='text-xs font-bold'>
                                        Inicia sesión
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='bg-white px-3 py-2 rounded-lg cursor-pointer flex items-center gap-1 text-[#FF6B35]'>
                        <BiCartAlt className='h-5 w-5' />
                        <p className='text-sm font-semibold hidden sm:block'>
                            S/0.00
                        </p>
                    </div>
                </div>
                
            </header>
            <Login />
        </>
    );
};
