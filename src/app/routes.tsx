import { LoginPage } from '@/features/auth/pages/LoginPage';
import { HomePage } from '@/features/home/page/HomePage';
import { AuthLayout } from '@/layouts/AuthLayout';
import { Layout } from '@/layouts/Layout';
import { PublicLayout } from '@/layouts/PublicLayout';
import { Route, Routes } from 'react-router';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/menu' element={<div>Menú</div>} />
                </Route>
                <Route path='/customer/' element={<AuthLayout />}>
                    <Route
                        path='/customer/account/login'
                        element={<LoginPage />}
                    />
                </Route>
            </Route>
        </Routes>
    );
}
