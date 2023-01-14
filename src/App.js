import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {AppRoutingConfig} from './configs/AppRoutingConfig'
import CategoryList from './pages/categories/CategoryList';
import SideBar from './components/SideBar';
import {routes} from './AppConfigs.js';

function App() {
  return (
    <>
      <SideBar>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact element={<route.component/>}/>
        ))}
      </Routes>
      </SideBar>
    </>
  );
}

export default App;
