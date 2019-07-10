import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import {parameters} from './components/particlesjs-config'




// const particlesOptions = {
//   particles: {
//     number: {
//       value: 200,
//       density: {
//         enable: true,
//         value_are: 800
//       }
//     },
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//   }
// }

function App() {
  return (
    <div className="App">
      <Particles className='particles'
              params={parameters}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
