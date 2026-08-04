import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Highlights from './components/Highlights';
import About from './components/About';
import Footer from './components/Footer';
import Ourartists from './pages/Ourartists';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Aboutus from './pages/Aboutus';

// Simple layout container (inline, no separate component)
const Container = ({ children }) => (
  <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px' }}>{children}</div>
);

const Home = () => (
  <div className="home-page">
    <Hero />
    <Artists />
    {/* Highlights paints its own full-width black band */}
    <Highlights galleryHref="/gallery" />
    <About />
  </div>
);

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Portfolio/>}/>
          <Route path="/booking" element={<Contact/>}/>
          <Route path="/artists" element={<Ourartists/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="*" element={<section><Container><h1>Not Found</h1></Container></section>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
