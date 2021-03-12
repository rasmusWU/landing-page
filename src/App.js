import './App.css';
import PrimaryNavigation from './components/PrimaryNavigation';
import Gallery from './components/Gallery';
import Pitch from './components/Pitch';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
      <PrimaryNavigation />
      <Gallery />
      <Pitch />
      <Plans />
    </div>
  );
}

export default App;
