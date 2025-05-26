import { Header } from '@/shared/components/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <>
            <div className='h-screen font-poppins' >
                <Header />
                <Outlet />
            </div>
        </>
    );
};
