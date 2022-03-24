import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Hero from './components/hero/Hero.js';
import Destinations from './components/destinations/Destinations.js';
import ImgCarousel from './components/carousel/ImgCarousel.js';
import Search from './components/search/Search.js';
import Selects from './components/selects/Selects.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
