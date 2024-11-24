import React, { useState } from 'react'

const fruits = {
    apple: {
        name: 'Apple',
        description: 'Crisp and sweet, perfect for a healthy snack.',
        price: '$1.00',
        emoji: '🍎',
        sold: Math.random() < 0.5,
    },
    banana: {
        name: 'Banana',
        description: 'Soft and creamy, a great source of energy.',
        price: '$0.50',
        emoji: '🍌',
        sold: Math.random() < 0.5,
    },
    cherry: {
        name: 'Cherry',
        description: 'Small, round, and juicy, packed with antioxidants.',
        price: '$2.00 per pound',
        emoji: '🍒',
        sold: Math.random() < 0.5,
    },
    orange: {
        name: 'Orange',
        description: 'Juicy and tangy, full of vitamin C.',
        price: '$1.20',
        emoji: '🍊',
        sold: Math.random() < 0.5,
    },
    grape: {
        name: 'Grape',
        description: 'Sweet and juicy, perfect for snacking or making wine.',
        price: '$2.50 per pound',
        emoji: '🍇',
        sold: Math.random() < 0.5,
    },
    watermelon: {
        name: 'Watermelon',
        description: 'Refreshing and hydrating, perfect for hot days.',
        price: '$3.00',
        emoji: '🍉',
        sold: Math.random() < 0.5,
    },
    strawberry: {
        name: 'Strawberry',
        description: 'Sweet and fragrant, delicious in desserts or on their own.',
        price: '$2.00 per pint',
        emoji: '🍓',
        sold: Math.random() < 0.5,
    }
};


export default function LevelFour() {

    let message;
    const display = false;
    const display2 = true;

    if (display) {
        message = <p className='font-serif mb-2'>I'm the truth!</p>
    } else {
        message = <p className='font-serif mb-2'>Am I a lie?</p>
    }

    


  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 4: In this level, we'll conditionally render a content or a component.</h1>

        <h2 className='font-medium text-md font-sans mb-2'> The first message is setup as an if-else condition and it has a state of 'false', the other one is in a ternary operator with a state of 'true'.</h2>

        {message}
        {display2 ? <p className='font-serif mb-4 border-b-2'>I'm the truth!</p> : <p className='font-serif mb-4 border-b-2'>Am I a lie?</p>}

        <h2 className='font-medium text-md font-sans mb-2'> In this second task, I'll just display the fruits that was sold which has a price above 0.50 dollars.</h2>
        <ul>
            {
                Object.values(fruits).map((fruit, index) => {
                    // Convert the price to a number for comparison
                    const priceNumber = parseFloat(fruit.price.replace('$', ''));

                    return (priceNumber > 0.50 && fruit.sold) ? (
                        <li key={index} className='mb-2'>
                            <p>{fruit.name} {fruit.emoji} || {fruit.price} - {fruit.sold ? 'Sold' : 'Available'}</p>
                            <p>{fruit.description}</p>
                        </li>
                    ) : null;
                })
            }
        </ul>
    </div>
  )
}
