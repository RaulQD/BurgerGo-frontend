import { Button } from '@/components/ui/button';
import BurgerFlying from '../../../assets/burger-flying.webp';

export const Hero = () => {
    return (
        <section>
            <div className='flex items-center justify-between gap-4'>
                <div>
                    <h1 className='text-5xl font-bold text-[#2A2A2A]'>
                        ¡Bienvenido a nuestra <br /> hamburguesería!
                    </h1>
                    <p className='mt-4 text-xl text-[#2A2A2A]'>
                        Donde lo imposible se vuelve delicioso. Hamburguesas
                        fuera de serie, sabor sin límites.
                    </p>
                    <Button className='mt-6 px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#F4A261] transition duration-300 cursor-pointer'>
                        Ver Menú
                    </Button>
                </div>
                <div className=' md:mt-0 max-w-xl w-full'>
                    <img
                        src={BurgerFlying}
                        alt='Hamburguesa'
                        className='w-full h-auto object-contain'
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    );
};
