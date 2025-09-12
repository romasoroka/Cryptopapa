import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NotFound />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;