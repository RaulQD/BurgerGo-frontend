export const Spinner = () => {
    return (
        <div className='relative w-16 h-16'>
            <div className='absolute inset-0 rounded-full border-4 border-solid border-t-transparent border-l-transparent border-[#FF6B35] animate-spin'></div>
            <div className='absolute inset-0 rounded-full border-4 border-solid border-b-transparent border-r-transparent border-[#f8875e] animate-[spin_1.5s_linear_infinite_reverse]'></div>
        </div>
    );
};
