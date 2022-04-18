import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blogs/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>

      <Header></Header>
      <h2 className='text-center' >Rinrav's Home Made Achar Service</h2>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
        <RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
