import Counter from './components/Counter'
import Greeting from './components/Greeting'
import PhotoCard, { PhotoCardType } from './components/PhotoCard'
import AboutMe, {Person} from './components/AboutMe'
import './App.css';

const card: PhotoCardType = {
    photo: 'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
    user: 'Todd Albert',
    description: 'Random from Unsplash. Could be anything.',
    mainPhoto: 'https://source.unsplash.com/random?sig=1',
    likeCount: 800
}

const person: Person = {
  name: 'Eddie',
  age: 29,
  awesome: true
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello TypeScript</h1>
        <AboutMe person={person} />
        <Counter />
        <Greeting firstName='Eddie' lastName='Espinosa'/>
        <PhotoCard card={card} />
      </header>
    </div>
  );
}

export default App;
