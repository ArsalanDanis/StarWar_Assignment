import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import FilmContents from './components/filmContent';
import PeaopleContents from './components/peopleContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsContents from './components/planetsContents';
import SpeciesContents from './components/speciesContents';
import StarshipsContents from './components/starShips';
import VehiclesContents from './components/vehiclesContents';
import FilmDetailsPage from './components/FilmDetails';
import HomePageDeafult from './components/defaultHomePage';
import PeopleDetailsPage from './components/PeaopleDetails';
import PlanetDetailsPage from './components/planetDetails';
import SpeciesDetailsPage from './components/speciesDetails';
import StarshipsDetailsPage from './components/starshipsDetails';
import VecDetailsPage from './components/vecDetails';

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then((res) => res.json())
      .then((data) => setFilms(data.results))
      .catch((error) => console.error('Error fetching films:', error));

    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error('Error fetching people:', error));

    fetch('https://swapi.dev/api/planets')
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error('Error fetching people:', error));
  
    fetch('https://swapi.dev/api/species')
      .then((res) => res.json())
      .then((data) => setSpecies(data.results))
      .catch((error) => console.error('Error fetching people:', error));

    fetch('https://swapi.dev/api/starships')
      .then((res) => res.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.error('Error fetching people:', error));

    fetch('https://swapi.dev/api/vehicles')
      .then((res) => res.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error('Error fetching people:', error));

  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-container">
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route path="/" index element={<HomePageDeafult />} />
              <Route path="/Films" element={<FilmContents data={films} />} />
              <Route path="/People" element={<PeaopleContents data={people} />} />
              <Route path="/Planets" element={<PlanetsContents data={planets} />} />
              <Route path="/Species" element={<SpeciesContents data={species} />} />
              <Route path="/Starships" element={<StarshipsContents data={starships} />} />
              <Route path="/Vehicles" element={<VehiclesContents data={vehicles} />} />
            </Routes>
            <Routes>
              <Route path="/filmdetails/:id" element={<FilmDetailsPage data={films} />} />
              <Route path="/peopledetails/:id" element={<PeopleDetailsPage data={people} />} />
              <Route path="/planetdetails/:id" element={<PlanetDetailsPage data={planets} />} />
              <Route path="/speciesdetails/:id" element={<SpeciesDetailsPage data={species} />} />
              <Route path="/starshipsdetails/:id" element={<StarshipsDetailsPage data={starships} />} />
              <Route path="/vecdetails/:id" element={<VecDetailsPage data={vehicles} />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
