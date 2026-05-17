import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

// Simple layout container (inline, no separate component)
const Container = ({ children }) => (
  <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px' }}>{children}</div>
);

const Home = () => (
  <>
    <Hero />
    <Artists />
    {/* Highlights paints its own full-width black band */}
    <Highlights galleryHref="/gallery" />
  </>
);

const Gallery = () => (
  <section style={{ background: 'transparent' }}>
    <Container>
      <h1>Gallery</h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:12}}>
        {Array.from({length:8}).map((_,i)=>(
          <div key={i} style={{height:140, background:'#2a2a2a', borderRadius:12, flex:'1 1 180px'}} />
        ))}
      </div>
    </Container>
  </section>
);

const Booking = () => (
  <section style={{ background: 'transparent' }}>
    <Container>
      <h1>Booking</h1>
      <p>Drop your form later. For now:</p>
      <a href="mailto:you@example.com" style={{display:'inline-block',marginTop:12,padding:'10px 14px',borderRadius:8,background:'#111',color:'#fff'}}>
        Email for Appointment
      </a>
    </Container>
  </section>
);

const About = () => (
  <section style={{ background: 'transparent' }}>
    <Container>
      <h1>About</h1>
      <p>Techno producer. Web dev. Tattoo artist. Based in ____.</p>
    </Container>
  </section>
);

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<section><Container><h1>Not Found</h1></Container></section>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
