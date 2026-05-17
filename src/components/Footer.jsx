import './Footer.css';
import logo from '../assets/tattoologo1.png';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#000",
      color: "#fff",
      padding: "20px 20px",
      marginTop: "0px",
      textAlign: "center",
    }}>
      <div className="footer-container">
        
        <div className="footer-section footer-links">
          <h4 style={{ color: "red", marginBottom: 8 }}>Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
        </div>

        <div className="footer-section footer-links">
          <h4 style={{ color: "red", marginBottom: 8 }}>Socials</h4>
          <p>Instagram</p>
          <p>Tiktok</p>
          <p>Email</p>
        </div>

        <div className="footer-section">
          <h4 style={{ color: "red", marginBottom: 8 }}>Studio Hours</h4>
          <p>Mon–Fri: 10am – 6pm</p>
          <p>Sat: 12pm – 5pm</p>
        </div>

        <div className="footer-section footer-links">
          <h4 style={{ color: "red", marginBottom: 8 }}>Address</h4>
          <p>102 Genesee St</p>
          <p>Utica, NY, 13502</p>
        </div>

        {/* Logo or Image */}
        <div className="footer-logo">
          <img src={logo} alt="Archangel" />
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Archangel. All rights reserved.
      </p>
    </footer>
  );
}