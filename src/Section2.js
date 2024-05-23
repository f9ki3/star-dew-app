import React from 'react';
import './App.css';

// Define the bachelors array
const bachelorittes = [
  {
    name: 'Abigail',
    img: require('./stardew_images/Bachelorettes/Abigail.png')
  },
  {
    name: 'Emily',
    img: require('./stardew_images/Bachelorettes/Emily.png')
  },
  {
    name: 'Hayley',
    img: require('./stardew_images/Bachelorettes/Haley.png')
  },
  {
    name: 'Leah',
    img: require('./stardew_images/Bachelorettes/Leah.png')
  },
  {
    name: 'Maru',
    img: require('./stardew_images/Bachelorettes/Maru.png')
  },
  {
    name: 'Penny',
    img: require('./stardew_images/Bachelorettes/Penny.png')
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
      <h1>Bachelorites</h1>
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
