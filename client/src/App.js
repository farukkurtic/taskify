import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Registration from './pages/register';
import UserLogin from './pages/login';
import List from './pages/list';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/list' element={<List/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes> 
      <script src="https://kit.fontawesome.com/546f520f0b.js" crossOrigin="anonymous"></script>
    </>
  );
}

export default App;
