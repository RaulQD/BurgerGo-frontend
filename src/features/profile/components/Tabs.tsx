import {
    FingerprintIcon,
    LogOutIcon,
    MapPinIcon,
    ShoppingBagIcon,
    UserIcon,
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import type { Tab } from '@/shared/types/nav.interface';

const tabs: Tab[] = [
    { name: 'Mi Cuenta', href: '/account/profile', icon: UserIcon },
    {
        name: 'Mis Pedidos',
        href: '/account/orders',
        icon: ShoppingBagIcon,
    },
    {
        name: 'Mis Direcciones',
        href: '/account/my-addresses',
        icon: MapPinIcon,
    },
    {
        name: 'Cambiar Password',
        href: '/account/change-password',
        icon: FingerprintIcon,
    },
    {
        name: 'Cerrar Sesión',
        icon: LogOutIcon,
        isAction: true,
    },
];
const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

export const Tabs = () => {
    const { logout } = useAuthStore();
    // Handle logout action
    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    const location = useLocation();
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                modules={[FreeMode]}
                className='w-full'>
                {tabs.map((tab) => (
                    <SwiperSlide key={tab.name}>
                        {tab.isAction ? (
                            // Para el logout, usamos un button que ejecuta la acción directamente
                            <button
                                onClick={handleLogout}
                                className={classNames(
                                    'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group flex flex-col items-center justify-center gap-1 border-b-2 border-gray-300 text-xs font-medium py-2 px-2 text-center h-20 w-full cursor-pointer'
                                )}>
                                <tab.icon
                                    className='text-gray-400 group-hover:text-gray-500 h-5 w-5'
                                    aria-hidden='true'
                                />
                                <span>{tab.name}</span>
                            </button>
                        ) : (
                            // Para navegación normal, usamos NavLink
                            <NavLink
                                to={tab.href!}
                                className={classNames(
                                    location.pathname === tab.href
                                        ? 'border-orange-600 text-orange-500 bg-orange-50'
                                        : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group flex flex-col items-center justify-center gap-1 border-b-2 border-gray-300 text-xs font-medium py-2 px-2 text-center h-20'
                                )}>
                                <tab.icon
                                    className={classNames(
                                        location.pathname === tab.href
                                            ? 'text-orange-500'
                                            : 'text-gray-400 group-hover:text-gray-500',
                                        'h-5 w-5'
                                    )}
                                    aria-hidden='true'
                                />
                                <span>{tab.name}</span>
                            </NavLink>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
