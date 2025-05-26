export const Classics = () => {
  const classics = [
        {
            id: 1,
            name: 'Classic Burger',
            description: 'A timeless classic with a juicy beef patty, lettuce, tomato, and our special sauce.',
            price: 8.99,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 2,
            name: 'Cheeseburger',
            description: 'A classic burger topped with melted cheese, pickles, and onions.',
            price: 9.49,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 3,
            name: 'Bacon Burger',
            description: 'A delicious burger with crispy bacon, lettuce, tomato, and our signature sauce.',
            price: 10.49,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 4,
            name: 'Veggie Burger',
            description: 'A hearty veggie patty with fresh vegetables, avocado, and our special sauce.',
            price: 8.49,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 5,
            name: 'Spicy Chicken Burger',
            description: 'A spicy chicken patty with lettuce, tomato, and our zesty sauce.',
            price: 9.99,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 6,
            name: 'Double Cheeseburger',
            description: 'Two juicy beef patties with double cheese, pickles, and onions.',
            price: 11.99,
            imageUrl: '/assets/buger2.png'
        },
        {
            id: 7,
            name: 'Double Cheeseburger',
            description: 'Two juicy beef patties with double cheese, pickles, and onions.',
            price: 11.99,
            imageUrl: '/assets/buger2.png'
        }

  ]
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-[#2A2A2A] mb-10'>Las Clásicas</h1>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {classics.map((burger) => (
                    <div key={burger.id} className='bg-white p-4 rounded-lg shadow-md'>
                        <img
                            src={burger.imageUrl}
                            alt={burger.name}
                            className='w-full h-40 object-cover rounded-md mb-4'
                        />
                        <h2 className=' font-semibold text-[#2A2A2A] '>{burger.name}</h2>
                        <p className='text-gray-600 text-sm mt-2'>{burger.description}</p>
                        <p className='mt-2 text-lg font-bold text-[#FF6B35]'>${burger.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
