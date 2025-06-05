import { Header } from '@/shared/components/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <>
            <div className='h-screen font-poppins pt-2' >
                <Header />
                <Outlet />
            </div>
        </>
    );
};
