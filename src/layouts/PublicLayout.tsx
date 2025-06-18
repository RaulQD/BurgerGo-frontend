import { NavBar } from '@/shared/components/NavBar';
import { Outlet } from 'react-router';

export const PublicLayout = () => {
    return (
        <>
            <div className='w-full lg:max-w-6xl mx-auto px-4 lg:p-0'>
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};
