
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Contacts from './Views/Contacts';
import Home from './Views/Home';
import NotFound from './Views/NotFound';

import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home /> } />
       <Route path='/Contacts' element={<Contacts /> } />
       <Route path='*' element={<NotFound /> } />
    </Routes>
    </BrowserRouter>
      
      

    </>
  );
}

export default App;
