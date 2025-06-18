import { NavLink } from 'react-router';
import type { NavLinks } from '../types/nav.interface';
import { Flame, Home, Menu, Phone, SquareMenu, Tag, User } from 'lucide-react';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useAppStore } from '../store/useAppStore';

export const NavBar = () => {
    const { token } = useAuthStore();
    const openModal = useAppStore((state) => state.onOpen);
    const isAuthenticated = !!token;
    const leftNavLinks: NavLinks[] = [
        { label: 'Menú', path: '/menu', icon: Menu },
        { label: 'Promociones', path: '/promotions', icon: Flame },
    ];

    const rightNavLinks: NavLinks[] = [
        { label: 'Contacto', path: '/contact', icon: Phone },
    ];
    // Navigation items para mobile
    const mobileNavItems = [
        { label: 'Inicio', path: '/', icon: Home },
        { label: 'Promos', path: '/promotions', icon: Tag },
        { label: 'Carta', path: '/menu', icon: SquareMenu },
        isAuthenticated
            ? { label: 'Mi perfil', path: '/account/profile', icon: User }
            : { label: 'Login', path: '/login', icon: User },
    ];

    return (
        <>
            <nav className='hidden lg:flex items-center justify-between font-semibold text-xs py-5'>
                {/* Links del lado izquierdo */}
                <div className='flex items-center gap-6'>
                    {leftNavLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className='text-[#2A2A2A] text-sm flex items-center gap-1'>
                            <link.icon className='inline-block mr-1 w-5 h-5' />
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Links del lado derecho */}
                <div className='flex items-center gap-6'>
                    {rightNavLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className='text-[#2A2A2A] text-sm flex items-center gap-1'>
                            <link.icon className='inline-block mr-1 w-5 h-5' />
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
            {/* Boton de navegación en mobile - Solo visible en mobile */}
            <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-t-gray-300 z-50 '>
                <div className='flex justify-around items-center py-2'>
                    {mobileNavItems.map((item) => {
                        const isLogin = item.label === 'Login';
                        return isLogin ? (
                            <button
                                key={item.label}
                                type='button'
                                onClick={openModal}
                                className='flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700 cursor-pointer'>
                                <item.icon className='w-5 h-5 text-gray-500' />
                                <span className='text-xs font-medium'>
                                    {item.label}
                                </span>
                            </button>
                        ) : (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                                        isActive
                                            ? 'text-[#FF6B35]'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`
                                }>
                                {({ isActive }) => (
                                    <>
                                        <item.icon
                                            className={`w-5 h-5 ${
                                                isActive
                                                    ? 'text-[#FF6B35]'
                                                    : 'text-gray-500'
                                            }`}
                                        />
                                        <span className='text-xs font-medium'>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
