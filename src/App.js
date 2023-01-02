import Header from './components/Header';
import Footer from './components/Footer';
import Addbook from './components/Addbook';
import Booklist from './components/Booklist';
import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      <Booklist />
      <Addbook />
      < Footer />
    </div>
  );
}

export default App;
