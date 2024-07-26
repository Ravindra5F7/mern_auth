import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Home from './pages/home';
import Aboutus from './pages/about';
export default function App() {
  return (
    <BrowserRouter className='text-blue-700'>
      <Routes>
        <Route path='/home' Component={<Home/>}/>
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
