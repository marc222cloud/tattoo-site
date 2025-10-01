export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #e5e7eb",
      padding: "16px 20px",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "#6b7280",
      marginTop: "48px"
    }}>
      <p>© {new Date().getFullYear()} Marcy Ink. All rights reserved.</p>
      <div style={{ marginTop: 8, display: "flex", justifyContent: "center", gap: 12 }}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#111" }}>Instagram</a>
        <a href="mailto:you@example.com" style={{ color: "#111" }}>Email</a>
      </div>
    </footer>
  );
}