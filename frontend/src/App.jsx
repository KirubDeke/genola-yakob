import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import AboutUs from './AboutUs';
import ProjectPage from './ProjectsPage';
import AddProjects from './AddProjects';
import RegisterLogin from './RegisterLogin';
import Dashboard from './Dashboard';
import AdminManagement from './AdminManagement';
import DashboardAuthor from './DashboardAuthor';
function App() {
  return (
    <>
      
      <div className="container">
        <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<ProjectPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/add-projects' element={<AddProjects/>}/>
          <Route path='/admin' element={<RegisterLogin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/admin-management' element={<AdminManagement/>}/>
          <Route path='/author' element={<DashboardAuthor/>}/>
          
        </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;