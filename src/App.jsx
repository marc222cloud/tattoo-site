import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
const Shell = ({ children }) => (
  <div style={{ maxWidth: 960, margin: "32px auto", padding: "0 20px" }}>
    {children}
  </div>
);

const Home = () => (
  <Shell>
    <h1>Custom Tattoos, Clean Lines.</h1>
    <p>Booking open. Replace this with your vibe, policies, and aftercare notes.</p>
  </Shell>
);

const Gallery = () => (
  <Shell>
    <h1>Gallery</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12}}>
      {Array.from({length:8}).map((_,i)=>(
        <div key={i} style={{height:140,background:"#f3f4f6",borderRadius:12}} />
      ))}
    </div>
  </Shell>
);

const Booking = () => (
  <Shell>
    <h1>Booking</h1>
    <p>Drop your form later. For now:</p>
    <a href="mailto:you@example.com" style={{display:"inline-block",marginTop:12,padding:"10px 14px",borderRadius:8,background:"#111",color:"#fff"}}>
      Email for Appointment
    </a>
  </Shell>
);

const About = () => (
  <Shell>
    <h1>About</h1>
    <p>Techno producer. Web dev. Tattoo artist. Based in ____.</p>
  </Shell>
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
          <Route path="*" element={<Shell><h1>Not Found</h1></Shell>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
