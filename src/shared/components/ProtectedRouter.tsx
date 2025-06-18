import { useAuth } from '@/features/auth/hook/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAppStore } from '../store/useAppStore';

type ProtectedRouterProps = {
    children: React.ReactNode;
    isAllowed?: boolean;
    redirectPath?: string;
};

export const ProtectedRouter = ({
    children,
    isAllowed = false,
    redirectPath = '/',
}: ProtectedRouterProps) => {
    const location = useLocation();
    const { isAppLoading, isAuthenticated } = useAuth();
    const { onOpen } = useAppStore();

    if (!isAllowed) {
        if (onOpen) {
            onOpen();
        }
    }
    if (!isAppLoading && !isAuthenticated) {
        return (
            <Navigate to={redirectPath} state={{ from: location }} replace />
        );
    }

    return children ? <> {children}</> : <Outlet />;
};
