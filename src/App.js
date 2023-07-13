
import './App.css';
import Menu from './components/Menu'
 import Login from './components/Login'
 import Profile from './components/Profile'
 import Register from './components/Register'
 import Home from './components/Home'
 import Product from './components/Product'
 import Admin from './components/Admin'
 import Contactus from './components/Contactus'
 import View from './components/View'
 import Update from './components/Update'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/product' element={<Product />} />
      <Route path='/menu' element={<Menu />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/update' element={<Update />} />
         <Route path='/view' element={<View />} />
         <Route path='/admin' element={<Admin />} />
         
         <Route path='/' element={<Home />} />
         <Route path='/contactus' element={<Contactus />} />
        </Routes>    
      </BrowserRouter>

    </div>
  );
}

export default App;
