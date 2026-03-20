"use client";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        
        <div>
          <h4 style={styles.title}>ALAUDIS</h4>
          <p style={styles.text}>Polish Grand Piano</p>
        </div>

        <div>
          <h4 style={styles.title}>MODELS</h4>
          <ul style={styles.list}>
            <li>Alaudis 178</li>
            <li>Alaudis 214</li> {/* 🔥 POPRAWIONE */}
            <li>Alaudis 275</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.title}>CONFIGURATOR</h4>
          <ul style={styles.list}>
            <li>Choose finish</li>
            <li>Choose color</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.title}>COMPANY</h4>
          <ul style={styles.list}>
            <li>About</li>
            <li>Factory</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div style={styles.bottom}>
        © 2026 ALAUDIS
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#000",
    color: "#fff",
    padding: "80px 40px 40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  title: {
    fontSize: "12px",
    letterSpacing: "3px", // 🔥 bardziej premium
    marginBottom: "20px",
    opacity: 0.6,
    textTransform: "uppercase" as const,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "34px",
    opacity: 0.9,
    fontSize: "15px",
  },

  text: {
    opacity: 0.7,
    fontSize: "15px",
  },

  bottom: {
    marginTop: "60px",
    textAlign: "center" as const,
    opacity: 0.4,
    fontSize: "12px",
    letterSpacing: "2px",
  },
};
