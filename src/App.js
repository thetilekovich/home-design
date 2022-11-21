import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
