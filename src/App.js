import './App.css';
import Home from './pages/Home';
import {Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/home' element={<Home />} /> */}
    </Routes>
    </>
  );
}

export default App;
