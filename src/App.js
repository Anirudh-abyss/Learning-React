
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './Learning JSX';

function App() {
  return (
    <div className="App">
      <Greet name="Anirudh">
        <p>He is a Good boy</p>
      </Greet>
      <Greet name="Yash"/>
      <Greet name="Ashutosh"/>
      <Greet name="Siddhart"/>

      <Welcome name ="Anirudh"/>
    </div>
  );
}

export default App;
