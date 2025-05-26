import { BiCartAlt, BiSearch, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import BurgerLogo from '@/assets/burger-logo.webp'; // Assuming you have a logo image

export const Header = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header className=' bg-[#FF6B35] '>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-2 h-14 '>
                {/* Logo or Title */}
                <div className='flex items-center gap-10'>
                    <img
                        src={BurgerLogo}
                        alt='Logo'
                        className=' cursor-pointer'
                        onClick={handleLogoClick}
                    />
                    <div className='relative w-[480px]'>
                        <input
                            type='text'
                            placeholder='Buscar...'
                            className='text-gray-600 pl-10 pr-4 py-2 w-full rounded-full border bg-white focus:outline-none text-sm'
                        />
                        <BiSearch className='absolute left-3 top-2.5 text-xl text-red-500' />
                    </div>
                </div>
                {/* Acciones */}
                <div className='flex items-center gap-10'>
                    <div className='flex flex-col items-center mr-30'>
                        <p className='text-white font-semibold text-xs'>
                            Delivery a domicilio
                        </p>
                        <span className='text-white font-semibold text-xs'>
                            Ingresa tu dirección
                        </span>
                    </div>
                    <div
                        className=' flex items-center gap-2'
                        onClick={() => navigate('/customer/account/login')}>
                        <BiUser className='h-5 w-5 text-white' />
                        <div className='flex flex-col justify-between items-start cursor-pointer hover:text-red-500'>
                            <p className='text-white font-semibold text-xs'>
                                Hola, Identificate
                            </p>
                            <p className='text-white font-semibold text-xs'>
                                Inicia sesión
                            </p>
                        </div>
                    </div>
                    <div className='bg-white px-3 py-2 rounded-md'>
                        <div className='flex items-center gap-2 text-[#FF6B35]'>
                            <BiCartAlt className='h-5 w-5' />
                            <p className='text-sm'>S/0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
