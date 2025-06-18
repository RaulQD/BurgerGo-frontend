import { Button } from '@/components/ui/button';
import BurgerFlying from '../../../assets/burger-flying.webp';

export const Hero = () => {
    return (
       
        <section className='relative my-15 sm:mb-12 md:mb-16 lg:mt-6'>
            <div className=' flex items-center lg:justify-between gap-4 '>
                <div className='w-full lg:flex-1 lg:max-w-2xl'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2A2A2A] leading-tight mb-4 sm:mb-6 text-center md:text-left'>
                        ¡Bienvenido a nuestra hamburguesería!
                    </h1>

                    <p className='text-center md:text-left text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed '>
                        Donde lo imposible se vuelve delicioso. Hamburguesas
                        fuera de serie, sabor sin límites.
                    </p>
                    <div className='flex justify-center md:justify-start '>
                        <Button className='mt-6 px-8 py-4 bg-[#FF6B35] text-white rounded-md hover:bg-[#E55A2B] cursor-pointer hover:scale-105 transform transition-all duration-200'>
                            Ver Menú
                        </Button>
                    </div>
                </div>
                <div className='hidden md:flex lg:flex-1 max-w-2xl '>
                    <div className='relative'>
                        {/* Efecto de fondo sutil */}
                        <div className='absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#F4A261]/10 rounded-full blur-3xl scale-110'></div>
                        <img
                            src={BurgerFlying}
                            alt='Hamburguesa deliciosa'
                            className='w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300 '
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
            {/* Elementos decorativos adicionales - Solo en desktop */}
            <div className='block absolute top-40 left-50 w-4 h-4 lg:bg-[#FF6B35] rounded-full opacity-20 animate-pulse'></div>
            <div className='block absolute top-40 right-50 w-6 h-6 lg:bg-[#F4A261] rounded-full opacity-30 animate-bounce'></div>
            <div className='block absolute bottom-20 left-1/4 w-3 h-3 lg:bg-[#FF6B35] rounded-full opacity-25'></div>
        </section>
    );
};
