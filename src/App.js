import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreditsPage from './pages/Credits';
import Portfolio from './pages/Portfolio';
import ProgramsPage from './pages/Programs';
import ArtPage from './pages/Art';
import GamesPage from './pages/Games';
import TheNefariousMachinePage from './pages/TheNefariousMachinePage';
import AutoMineSweeperPage from './pages/AutoMineSweeperPage';
import AquariumSimulatorPage from './pages/AquariumSimulatorPage';
import SuperSandPage from './pages/SuperSandPage'
import FamilyTreePage from './pages/FamilyTreeMaker'
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <Router>
      <HeaderBar/>
      <div className="containerwrapper">
        <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/credits" element={<CreditsPage/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/programs" element={<ProgramsPage/>}/>
              <Route path="/art" element={<ArtPage/>}/>
              <Route path="/games" element={<GamesPage/>}/>
              <Route path="/this" element={<TheNefariousMachinePage/>}/>
              <Route path="/paramines" element={<AutoMineSweeperPage/>}/>
              <Route path="/aquarium" element={<AquariumSimulatorPage/>}/>
              <Route path="/supersand" element={<SuperSandPage/>}/>
              <Route path="/familytree" element={<FamilyTreePage/>}/>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
