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
import { MenuContext, MobileSortActive } from './context';
import SearchPage from './pages/SearchPage';


function App() {

   const [menuActive, setMenuActive] = React.useState<boolean>(false)




   function menuHandle() {
      setMenuActive(prev => !prev)
   }

   return (
      <BrowserRouter>
         <div className='app-wrapp'>
            <MenuContext.Provider value={{ active: menuActive, menuHandle }}>
               <Menu />
               <Backet />
               <TopNavbar />
               <Routes>

                  <Route element={<HomePage />} path='/'></Route>
                  <Route element={<SelectedDevicesPage />} path='/:id'></Route>
                  <Route element={<DevicePage />} path='/:deviceType/:id'></Route>
                  <Route element={<SearchPage />} path='/search/:id'></Route>

               </Routes>
            </MenuContext.Provider>
         </div>
      </BrowserRouter>
   );
}

export default App;
