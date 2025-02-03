import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter,Routes, Route} from 'react-router';
import LandingPage from './pages/landingpage/index.jsx';
import Team from './pages/Teampage/index.jsx';
import Events from './pages/Eventspage/index.jsx';
import Contact from './pages/Contactpage/index.jsx';
import Clubs from './pages/ClubsPage/index.jsx';
import About from './pages/Aboutpage/index.jsx';
import 'boxicons';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<LandingPage />} />
      <Route path = "/Team" element = {<Team />} />
      <Route path = "/Events" element = {<Events />} />
      <Route path = "/Contact" element = {<Contact/>} />
      <Route path = "/Clubs" element = {<Clubs />} />
      <Route path = "/About" element = {<About />} />
    </Routes>
    <App />
  </BrowserRouter>
)
