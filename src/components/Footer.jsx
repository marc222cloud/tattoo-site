import './Footer.css';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#111",
      color: "#fff",
      padding: "40px 20px",
      marginTop: "48px",
      textAlign: "center",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: 800, margin: "0 auto" }}>
        
        {/* Logo or Image */}
        <div>
          <img src="/logo.png" alt="Archangel" style={{ width: 60 }} />
        </div>
        
        {/* Navigation */}
        <div>
          <h4 style={{ color: "red", marginBottom: 8 }}>Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
        </div>

        {/* Socials */}
        <div>
          <h4 style={{ color: "red", marginBottom: 8 }}>Socials</h4>
          <p>Instagram</p>
          <p>Tiktok</p>
          <p>Email</p>
        </div>

        {/* Studio Hours */}
        <div>
          <h4 style={{ color: "red", marginBottom: 8 }}>Studio Hours</h4>
          <p>Mon–Fri: 10am – 6pm</p>
          <p>Sat: 12pm – 5pm</p>
        </div>

        {/* Address */}
        <div>
          <h4 style={{ color: "red", marginBottom: 8 }}>Address</h4>
          <p>102 Genesee St</p>
          <p>Utica, NY, 13502</p>
        </div>
      </div>

      <p style={{ fontSize: "0.9rem", marginTop: 32, color: "#aaa" }}>
        © {new Date().getFullYear()} Archangel. All rights reserved.
      </p>
    </footer>
  );
}