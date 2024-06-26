import React from 'react';
import './App.css';

// Define the bachelors array
const bachelors = [
  {
    name: 'Alex',
    img: require('./stardew_images/bachelors/Alex.png')
  },
  {
    name: 'Elliot',
    img: require('./stardew_images/bachelors/Elliott.png')
  },
  {
    name: 'Harvey',
    img: require('./stardew_images/bachelors/Harvey.png')
  },
  {
    name: 'Sam',
    img: require('./stardew_images/bachelors/Sam.png')
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
      <h1>Bachelors</h1>
      <div className='Bachelors'>
        {bachelors.map((bachelor, index) => (
          <div  key={index}>
            <Name name={bachelor.name} />
            <Image img={bachelor.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
