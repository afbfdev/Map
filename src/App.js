import './App.css';
import Map from './components/map';


const location = {
  address: 'unnamed road, 26402 Had Soualem, Maroc.',
  lat: 33.42336,
  lng: -7.8512128,
}

function App() {
  return (
    <div className="App">
      <Map location={location} zoomLevel={17}/>
    </div>
  );
}

export default App;
