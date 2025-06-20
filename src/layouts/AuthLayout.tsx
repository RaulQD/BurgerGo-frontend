import { Outlet } from 'react-router';

export const AuthLayout = () => {
    return (
        <div>
            <div className='overflow-hidden h-screen font-poppins'>
                <div className='max-w-7xl mx-auto'>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};
