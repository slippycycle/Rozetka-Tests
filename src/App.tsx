import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import DevicePage from './pages/DevicePage';
import SelectedDevicesPage from './pages/SelectedDevicesPage';
import TopNavbar from './components/TopNavbar';
import Backet from './components/Backet';


function App() {
   return (
      <div className='app-wrapp'>
         <TopNavbar />
         <Backet/>
         <BrowserRouter>
            <Routes>
               <Route element={<HomePage />} path='/'></Route>
               <Route element={<SelectedDevicesPage />} path='/:id'></Route>
               <Route element={<DevicePage />} path='/:deviceType/:id'></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
