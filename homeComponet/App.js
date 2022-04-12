import './App.css';
import { loremIpsum } from 'react-lorem-ipsum';

function App() {
  return (
    <div id="h1">
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

export default App;
