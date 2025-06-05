import { NavLink } from 'react-router';
import type { NavLinks } from '../types/nav.interface';
import { BiMenu } from 'react-icons/bi';
import { Flame, Phone } from 'lucide-react';

export const NavBar = () => {
    
    const leftNavLinks: NavLinks[] = [
        { label: 'Menú', path: '/menu', icon: BiMenu },
        { label: 'Promociones', path: '/promotions', icon: Flame },
    ];

    const rightNavLinks: NavLinks[] = [
        { label: 'Contacto', path: '/contact', icon: Phone },
    ];

    return (
        <nav className='flex items-center justify-between font-semibold text-xs py-5'>
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
    );
};
