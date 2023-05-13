import Card from './card.js';
import './App.css';

import like from './img/like.png';
import repeat from './img/repley.png';
import downtown from './img/downtown.png';
import coment from './img/coment.png';
import dart_vader from './img/dart_vader.jpg'


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


function App() {
  return (
    <Card author={{
      name: "Anakin skywalker",
      photo: dart_vader,
      nickname: "@dart_vader"
    }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      coment={coment}
      like={like}
      repeat={repeat}
      downtown={downtown}
      
/>
  )
}

export default App;
