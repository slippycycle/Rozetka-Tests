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
import Menu from './components/Menu';
import { MenuContext } from './context';


function App() {

   const [menuActive, setMenuActive] = React.useState<boolean>(false)

   function menuHandle() {
      setMenuActive(prev => !prev)
   }

   return (
      <div className='app-wrapp'>
         <MenuContext.Provider value={{ active: menuActive, menuHandle }}>
            <Menu />
            <TopNavbar />
            <Backet />
            <BrowserRouter>
               <Routes>
                  <Route element={<HomePage />} path='/'></Route>
                  <Route element={<SelectedDevicesPage />} path='/:id'></Route>
                  <Route element={<DevicePage />} path='/:deviceType/:id'></Route>
               </Routes>
            </BrowserRouter>
         </MenuContext.Provider>
      </div>
   );
}

export default App;
