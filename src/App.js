import axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer';
import Addbook from './components/Addbook';
import Booklist from './components/Booklist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Header />
        <div className='container'>
        <Routes>
          <Route path="/books" element={ <Booklist />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/book"  element={<Addbook />}/>
          <Route path="/addbook/:id"  element={<Addbook />}/>
        </Routes>
        </div>
        < Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
