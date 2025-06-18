// import { LoginPage } from '@/features/auth/pages/LoginPage';
import { ChangePasswordPage } from '@/features/profile/page/ChangePasswordPage';
import { ProfilePage } from '@/features/profile/page/ProfilePage';
import { HomePage } from '@/features/home/page/HomePage';
import { Layout, PublicLayout } from '@/layouts';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { Route, Routes } from 'react-router';
import { ProtectedRouter } from '@/shared/components/ProtectedRouter';
import { useAuth } from '@/features/auth/hook/useAuth';
import { AddressPage } from '@/features/profile/page/AddressPage';

export default function AppRoutes() {
    const { isInitialized } = useAuth();
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/menu' element={<div>Menú</div>} />
                    <Route element={<ProfileLayout />}>
                        <Route
                            path='/account/profile'
                            element={
                                <ProtectedRouter isAllowed={isInitialized}>
                                    <ProfilePage />
                                </ProtectedRouter>
                            }
                        />
                        <Route
                            path='/account/change-password'
                            element={<ChangePasswordPage />}
                        />
                        <Route
                            path='/account/my-addresses'
                            element={<AddressPage />}
                        />
                    </Route>
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
