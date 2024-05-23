import React from 'react';
import './App.css';

// Define the bachelors array
const bachelorittes = [
  {
    name: 'Birdie',
    img: require('./stardew_images/Non-giftable NPCs/Birdie.png')
  },
  {
    name: 'Bouncer',
    img: require('./stardew_images/Non-giftable NPCs/Bouncer.png')
  },
  {
    name: 'Fizz',
    img: require('./stardew_images/Non-giftable NPCs/Fizz_00.png')
  },
  {
    name: 'Gil',
    img: require('./stardew_images/Non-giftable NPCs/Gil.png')
  },
  {
    name: 'Governor',
    img: require('./stardew_images/Non-giftable NPCs/Governor.png')
  },
  {
    name: 'Grandpa',
    img: require('./stardew_images/Non-giftable NPCs/Grandpa.png')
  },
  {
    name: 'Gunther',
    img: require('./stardew_images/Non-giftable NPCs/Gunther.png')
  },
  {
    name: 'Henchman',
    img: require('./stardew_images/Non-giftable NPCs/Henchman_Portrait_1.png')
  },
  {
    name: 'Marlon',
    img: require('./stardew_images/Non-giftable NPCs/Marlon.png')
  },
  {
    name: 'Morris',
    img: require('./stardew_images/Non-giftable NPCs/Morris.png')
  },
  {
    name: 'Mr. Qi',
    img: require('./stardew_images/Non-giftable NPCs/Mr._Qi.png')
  },
  {
    name: 'Professor Snail',
    img: require('./stardew_images/Non-giftable NPCs/Professor_Snail.png')
  }
];

// Function to render a name
function Name({ name }) {
  return <p>{name}</p>;
}


// Function to render an image
function Image({ img }) {
  return <img src={img} alt="" />;
}

// BachelorName component to render all names and images
export default function BachelorName() {
  return (
    <div className='BachelorsDiv'>
      <h1>Non-giftable NPCs</h1>
      <div className='Bachelors'>
        {bachelorittes.map((bacheloritte, index) => (
          <div  key={index}>
            <Name name={bacheloritte.name} />
            <Image img={bacheloritte.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
