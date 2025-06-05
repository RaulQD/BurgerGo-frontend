// import { LoginPage } from '@/features/auth/pages/LoginPage';
import { HomePage } from '@/features/home/page/HomePage';
import { Layout, PublicLayout } from '@/layouts';
import { Route, Routes } from 'react-router';


export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/menu' element={<div>Menú</div>} />
                </Route>
                {/* <Route path='/customer/' element={<AuthLayout />}>
                    <Route
                        path='account/login'
                        element={<LoginPage />}
                    />
                </Route> */}
            </Route>
        </Routes>
    );
}
