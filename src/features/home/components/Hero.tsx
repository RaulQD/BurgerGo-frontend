import { Button } from '@/components/ui/button';
import BurgerFlying from '../../../assets/burger-flying.webp';

export const Hero = () => {
    return (
        <section className='mb-16'>
            <div className='flex items-center justify-between gap-4 '>
                <div className='flex-1 max-w-2xl'>
                    <h1 className='text-6xl font-bold text-[#2A2A2A] leading-tight'>
                        ¡Bienvenido a nuestra <br /> hamburguesería!
                    </h1>
                    <p className='mt-6 text-xl text-gray-600 leading-relaxed'>
                        Donde lo imposible se vuelve delicioso. Hamburguesas
                        fuera de serie, sabor sin límites.
                    </p>
                    <Button className='mt-6 px-8 py-4 bg-[#FF6B35] text-white rounded-md hover:bg-[#E55A2B] cursor-pointer hover:scale-105 transform transition-all duration-200'>
                        Ver Menú
                    </Button>
                </div>
                <div className='flex-1 max-w-2xl '>
                    <div className='relative'>
                        {/* Efecto de fondo sutil */}
                        <div className='absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#F4A261]/10 rounded-full blur-3xl scale-110'></div>
                        <img
                            src={BurgerFlying}
                            alt='Hamburguesa deliciosa'
                            className='w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300'
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
