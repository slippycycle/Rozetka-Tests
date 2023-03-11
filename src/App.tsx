import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import DevicePage from './pages/DevicePage';
import SelectedDevicesPage from './pages/SelectedDevicesCategory';
import TopNavbar from './components/TopNavbar';
import Basket from './components/Basket';
import Menu from './components/Menu';
import { MenuContext, MobileSortActive } from './context';
import SearchPage from './pages/SearchPage';
import LeftMobileFilter from './components/LeftMobileFilter';
import BottomBanner from './components/BottomBanner';
import OrderPage from './pages/OrderList';
import Checkout from './pages/Checkout';


function App() {





   const [menuActive, setMenuActive] = React.useState<boolean>(false)

   const [active, setActive] = React.useState(false)

   function handleMenuState() {
      setActive(active => !active)
   }

   function menuHandle() {
      setMenuActive(prev => !prev)
   }

   return (
      <BrowserRouter>
         <div className='app-wrapp'>
            <MobileSortActive.Provider value={{ active, handleMenuState }} >
               <MenuContext.Provider value={{ active: menuActive, menuHandle }}>
                  <Menu />
                  <TopNavbar />
               </MenuContext.Provider>
               <Basket />
               <LeftMobileFilter />
               <Routes>

                  <Route element={<HomePage />} path='/'></Route>
                  <Route element={<SelectedDevicesPage />} path=':id/'></Route>
                  <Route element={<DevicePage />} path='/:deviceType/:id/'></Route>
                  <Route element={<SearchPage />} path='/search/:id/'></Route>
                  <Route element={<Checkout />} path='checkout'></Route>

               </Routes>
            </MobileSortActive.Provider>
         </div>
         <BottomBanner />
      </BrowserRouter>
   );
}

export default App;
