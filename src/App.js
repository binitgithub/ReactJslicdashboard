import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login, Register, Dashboard, Lead} from './components';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' exact element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/lead' element={<Lead/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
