import { Classics } from '../components/Classics';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';

export const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-20'>
            <Hero />
            <Classics />
            <Categories />
            
        </div>
    );
};
