import { NavLink } from 'react-router';
import type { NavLinks } from '../types/navLinks';
import { BiMenu } from 'react-icons/bi';

export const NavBar = () => {
    const navLinks: NavLinks[] = [
        { label: 'Menú', path: '/menu', icon: BiMenu },
    ];

    return (
        <div className='flex items-center gap-6font-semibold text-xs max-w-7xl mx-auto py-5  '>
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className='text-[#2A2A2A] text-sm flex items-center gap-1'
                    >
                    <link.icon className='inline-block mr-2 w-5 h-5' />
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
};
