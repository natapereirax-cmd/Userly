import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './containers/menu/index';
import Register from './containers/register/index';
import Header from './components/header/index';
import Footer from './components/footer/index';
import AboutUs from './containers/about-us/index';
import List from './containers/list/index';


function App() {

  return (
    <BrowserRouter>
      <div className="main-div">
        <Header/>
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/about' element={<AboutUs />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
