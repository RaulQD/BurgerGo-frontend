import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Slider } from '@/shared/components/Slider';
import Promos from '../../../assets/promos.png';
export interface Classic {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}
export const Classics = () => {
    const classics: Classic[] = [
        {
            id: 1,
            name: 'Classic Burger',
            description:
                'A timeless classic with a juicy beef patty, lettuce, tomato, and our special sauce.',
            price: 8.99,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 2,
            name: 'Cheeseburger',
            description:
                'A classic burger topped with melted cheese, pickles, and onions.',
            price: 9.49,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 3,
            name: 'Bacon Burger',
            description:
                'A delicious burger with crispy bacon, lettuce, tomato, and our signature sauce.',
            price: 10.49,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 4,
            name: 'Veggie Burger',
            description:
                'A hearty veggie patty with fresh vegetables, avocado, and our special sauce.',
            price: 8.49,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 5,
            name: 'Spicy Chicken Burger',
            description:
                'A spicy chicken patty with lettuce, tomato, and our zesty sauce.',
            price: 9.99,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 6,
            name: 'Double Cheeseburger',
            description:
                'Two juicy beef patties with double cheese, pickles, and onions.',
            price: 11.99,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 7,
            name: 'Double Cheeseburger',
            description:
                'Two juicy beef patties with double cheese, pickles, and onions.',
            price: 11.99,
            imageUrl: '/assets/buger2.png',
        },
        {
            id: 8,
            name: 'Triple Cheeseburger',
            description:
                'Triple juicy beef patties with double cheese, pickles, and onions.',
            price: 11.99,
            imageUrl: '/assets/buger2.png',
        },
    ];

    return (
        <>
            <div className='flex justify-center mb-20'>
                <img src={Promos} alt='Promos' />
            </div>
            <div className='text-center mb-12'>
                <h2 className='text-2xl lg:text-4xl text-[#2A2A2A] font-londrina'>
                    Nuestras{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF6B35]'>
                        clasicas
                    </span>
                </h2>
            </div>
            <div className='relative'>
                <button className='custom-prev absolute top-1/2 -left-3 lg:-left-5 transform -translate-y-1/2 z-10 bg-[#FF6B35] text-white py-5 px-1 rounded-md shadow-lg cursor-pointer'>
                    <ChevronLeft size={30} />
                </button>
                <button className='custom-next absolute top-1/2 -right-3 lg:-right-5 transform -translate-y-1/2 z-10 bg-[#FF6B35] text-white py-5 px-1 rounded-md shadow-lg cursor-pointer'>
                    <ChevronRight size={30} />
                </button>
                <Slider classics={classics} />
            </div>
        </>
    );
};
