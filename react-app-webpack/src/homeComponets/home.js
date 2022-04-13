import React from 'react';
import './home.css';
import { loremIpsum } from 'react-lorem-ipsum';

function Home() {
  return (
    <div className='Home'>
      <div className='headr'>Headri mas</div>
        <h1 className='homePage'>Home Page</h1>
      <div className="text-wrapper">
        {loremIpsum({ p: 3 }).map(text => (
          <div className="text" key={text}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
