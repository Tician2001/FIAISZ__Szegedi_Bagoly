import './App.css';
import {Route,  Routes } from "react-router-dom";
import Home from './routes/HomePage';
import About from './routes/AboutPage';
import Cond from './routes/CondPage';
import Public from './routes/PublicationListPage';
import DataManagement from "./routes/DataManagementPage";
import NewsLetter from "./routes/NewsLetterPage";
import CourseListPage from './routes/CourseListPage';
import ContactPage from "./routes/ContactPage";
import DirectorPage from "./routes/DirectorPage";
import Register from './routes/RegisterPage';
import Login from './routes/LoginPage';
import Parents from './routes/ParentsPage';
import Students from './routes/StudentsPage';
import Career from './routes/CareerPage';
import GoldGate from './routes/GoldGatePage';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rolunk" element={<About />} />
        <Route path="/konduktiv_csoport" element={<Cond />} />
        <Route path="/kozzeteteli_lista" element={<Public />} />
        <Route path="/adatkezelesi_tajekoztato" element={<DataManagement />} />
        <Route path="/hirlevel" element={<NewsLetter />} />
        <Route path="/tanszerlista" element={<CourseListPage />} />
        <Route path="/kapcsolat" element={<ContactPage />} />
        <Route path="/intezmenyvezeto" element={<DirectorPage />} />
        <Route path="/regisztracio" element={<Register />} />
        <Route path="/bejelentkezes" element={<Login />} />
        <Route path="/szuloknek" element={<Parents />} />
        <Route path="/diakoknak" element={<Students />} />
        <Route path="/karrier" element={<Career/>}/>
        <Route path="/aranykapu" element={<GoldGate/>}/>
      </Routes>
    </div>
  )
}