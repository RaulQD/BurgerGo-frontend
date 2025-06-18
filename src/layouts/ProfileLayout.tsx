import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Outlet } from 'react-router';
import { Tabs } from '@/features/profile/components/Tabs';

export const ProfileLayout = () => {
    const { profile } = useAuthStore();
    const getFirstLetterName = profile?.data.customer.name.split(' ');
    const firstName = getFirstLetterName?.[0];
    const initials =
        (firstName?.charAt(0)?.toUpperCase() ?? '') +
        (firstName?.charAt(1)?.toUpperCase() ?? '');

    return (
        <div className='pt-6 pb-24'>
            <div className='bg-white shadow-md rounded-lg p-6'>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='bg-orange-100 rounded-full p-2 font-bold text-orange-500 w-14 h-14 flex items-center justify-center text-xl font-oleo'>
                        {initials}
                    </div>
                    <h1 className='text-orange-500 font-bold'>
                        ¡Hola,{' '}
                        <span className='text-[#2A2A2A]'>{firstName}!</span>
                    </h1>
                </div>
                <Tabs />
                <Outlet />
            </div>
        </div>
    );
};
