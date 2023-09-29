
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Allcategories from'./components/Allcategories';
import Homepage from'./components/Homepage';
import Shop from'./components/Shop';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/allcategories'element={<Allcategories/>}/>
     <Route path='/homepage'element={<Homepage/>}/>
     <Route path='/shop'element={<Shop/>}/>
     <Route path='/blog'element={<Blog/>}/>
     <Route path='/contact'element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
