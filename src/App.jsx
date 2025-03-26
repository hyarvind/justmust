import { useState } from 'react';
import reactLogo from './assets/react.svg';
import heroImage from './assets/hero.jpeg';
import viteLogo from '/vite.svg';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <img src={heroImage} alt="Description of the image" />
      <h1>Counter value: {counter}</h1>
      <p>Footer: {counter}</p>
      <p>  As a B.Tech. Computer Science and Engineering student at MM(DU), I have developed a strong foundation in programming with proficiency in the MERN stack (MongoDB, Express.js, React, Node.js). Additionally, I possess expertise in web development technologies such as HTML, CSS, Bootstrap, JavaScript, and SQL, enabling me to build dynamic and responsive web applications.

I am passionate about technology and its potential to streamline complex operations, enhance user experiences, and drive innovation. Outside of coding, I actively engage in exploring new learning opportunities to expand my skill set and stay updated with the latest technological trends.

I am eager to contribute my technical expertise and continuously improve by tackling challenging projects and collaborating with like-minded individuals in the field. </p>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
