import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import {parameters} from './components/particlesjs-config'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: '8819d596f1c74f8ba4d1c6fc5b8d6ae4'
 });
 
class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response)
      // do something with response
    },
    function(err) {
      // there was an error
    }
    );
    console.log('click')
  }

render() {
  return (
    <div className="App">
      <Particles className='particles'
              params={parameters}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition />
    </div>
  );
}}

export default App;

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