import logo from './creeper.png';
import './App.css';
import { useTitle } from 'react-use';

function App() {
  useTitle('Forgotten Minecraft admin by FreHar');
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className={"home__title"}>Jongens jongens, wat zijn jullie ONGEDULDIG...</h2>
      <p className={"home__text"}>We zen ermee bezig, maar da ga ni allemaal vanzelf he!</p>
      <p className={"home__text"}>Dus please, ni bleiten, ni zagen. Het komt eraan.</p>
      <p className={"home__text--with-space"}>Liefs,</p>
      <p className={"home__text--names"}>
        Harmen en Frederik
        <button className={"home__evading-button"}>Kan me ni schele. Ik wil NU spelen!</button>
      </p>
    </header>
    
    </div>
  );
}

export default App;
