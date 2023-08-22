import { useState } from 'react'
import './App.css'


const colors = ['Green', 'Red', 'Blue', 'Yellow', 'Pink'];

function App() {
  const [circleColor, setCircleColor] = useState('');

  const handleButtonClick = (color) => {
    setCircleColor(color);
  };

  return (
    <div className='App'>
      <div className='circle' style={{backgroundColor: circleColor}}></div>
      <div className='buttons'>
        {colors.map((color, index) => (
          <button
          key={index}
          className='color-button'
          style={() => handleButtonClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App
