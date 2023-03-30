import { Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent/NavComponent';
import { RMContextProvider } from './context/context';
import { CharactersPage } from './pages/CharactersPage/CharactersPage';
import { HomePage } from './pages/HomePage/HomePage';
import { LocationsPage } from './pages/LocationsPage/LocationsPage';
import { EpisodesPage } from './pages/EpisodesPage/EpisodesPage';

function App() {
  return (
    <div className="App">
    <NavComponent/>
    <RMContextProvider>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/characters" element={<CharactersPage/>}></Route>
      <Route exact path='/locations' element={<LocationsPage/>}></Route>
      <Route exact path='/episodes' element={<EpisodesPage/>}></Route>
        <Route exact path='/' element = { HomePage}/>
      </Routes>
    </RMContextProvider>
    </div>
  );
}

export default App;
