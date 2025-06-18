import AppRoutes from './routes';
import { useAuth } from '@/features/auth/hook/useAuth';

export const App = () => {
    const { isAppLoading } = useAuth();

    // Solo mostrar splash si la app no se ha inicializado
    if (isAppLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='animate-pulse'>🍔</div>
                <p className='ml-2'>Cargando...</p>
            </div>
        );
    }
    return <AppRoutes />;
};
