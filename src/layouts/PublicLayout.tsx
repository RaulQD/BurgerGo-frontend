import { NavBar } from '@/shared/components/NavBar';
import { Outlet } from 'react-router';

export const PublicLayout = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto px-20'>
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};
