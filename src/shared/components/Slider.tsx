import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';
import type { Classic } from '@/features/home/components/Classics';

type SliderProps = {
    classics: Classic[];
};

export const Slider = ({ classics }: SliderProps) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}>
            {classics.map((classic) => (
                <SwiperSlide key={classic.id}>
                    <div className='bg-white rounded-xl shadow-md p-4 h-full'>
                        <img
                            src={classic.imageUrl}
                            alt={classic.name}
                            className='w-full h-48 object-cover rounded-t-lg mb-4'
                        />
                        <h3 className='font-oleo text-lg mb-6 text-[#2A2A2A]'>
                            {classic.name}
                        </h3>
                        <span className='text-sm'>Precio desde:</span>
                        <div className='flex items-center justify-between'>
                            <p className='font-oleo font-bold text-[#2A2A2A]'>
                                ${classic.price.toFixed(2)}
                            </p>
                            <Button
                                type='button'
                                variant='outline'
                                className=' border border-[#FF6B35] text-[#FF6B35] hover:text-white hover:bg-[#FF6B35] cursor-pointer'>
                                Agregar
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
