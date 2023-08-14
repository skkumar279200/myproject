import React from 'react';
import './App.css';
import Header from './Header';
import Image from './Image';
import CheckupSlick from './CheckupSlick';
import Image2 from './Image2';
import Image3 from './Components/Image3 Section/Image3';
import Image4 from './Components/Image4 Section/Image4';


function App() {
  return (
    <div className="App">

      <Header/>
      <Image/>
      <CheckupSlick/>
      <Image2/>
      <Image3/><br></br>
      <Image4/>

    </div>
  );
}

export default App;
