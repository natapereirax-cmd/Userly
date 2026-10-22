import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './containers/menu/index';
import Register from './containers/register';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
