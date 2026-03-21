// ==========================================================
// FOOTER
// ==========================================================
// To jest komponent stopki strony Alaudis.
//
// Za co odpowiada ten plik:
// 1. pokazuje 4 kolumny w stopce
// 2. wyświetla nazwę marki i podstawowe sekcje
// 3. pokazuje modele fortepianów
// 4. pokazuje linki / teksty do konfiguratora i firmy
// 5. wyświetla dolny napis © 2026 ALAUDIS
//
// Co tutaj najłatwiej zmieniasz:
// - nazwy modeli
// - nazwy sekcji
// - teksty w kolumnach
// - odstępy, kolory, rozmiary liter
// - układ siatki stopki
//
// Najważniejsze miejsca:
// - MODELS         -> lista modeli
// - CONFIGURATOR   -> opcje konfiguratora
// - COMPANY        -> sekcja firmowa
// - styles         -> cały wygląd stopki
// ==========================================================

"use client";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        {/* -------------------------------------------------- */}
        {/* KOLUMNA 1 - MARKA */}
        {/* -------------------------------------------------- */}
        <div>
          <h4 style={styles.title}>ALAUDIS</h4>
          <p style={styles.text}>Polish Grand Piano</p>
        </div>

        {/* -------------------------------------------------- */}
        {/* KOLUMNA 2 - MODELE */}
        {/* -------------------------------------------------- */}
        <div>
          <h4 style={styles.title}>MODELS</h4>
          <ul style={styles.list}>
            <li>Alaudis 178</li>
            <li>Alaudis 214</li>
            <li>Alaudis 275</li>
          </ul>
        </div>

        {/* -------------------------------------------------- */}
        {/* KOLUMNA 3 - KONFIGURATOR */}
        {/* -------------------------------------------------- */}
        <div>
          <h4 style={styles.title}>CONFIGURATOR</h4>
          <ul style={styles.list}>
            <li>Choose finish</li>
            <li>Choose color</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* -------------------------------------------------- */}
        {/* KOLUMNA 4 - FIRMA */}
        {/* -------------------------------------------------- */}
        <div>
          <h4 style={styles.title}>COMPANY</h4>
          <ul style={styles.list}>
            <li>About</li>
            <li>Factory</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* DOLNY NAPIS COPYRIGHT */}
      {/* ---------------------------------------------------- */}
      <div style={styles.bottom}>© 2026 ALAUDIS</div>
    </footer>
  );
}

// ==========================================================
// STYLE STOPKI
// ==========================================================
// Tutaj sterujesz wyglądem całego footer-a.
//
// Najważniejsze pola:
// - footer  -> tło i padding całej stopki
// - grid    -> układ 4 kolumn
// - title   -> styl nagłówków kolumn
// - list    -> styl list pod nagłówkami
// - text    -> zwykły tekst
// - bottom  -> dolny napis copyright
// ==========================================================
const styles = {
  // GŁÓWNY KONTENER STOPKI
  footer: {
    background: "#000",
    color: "#fff",
    padding: "80px 40px 40px",
  },

  // UKŁAD 4 KOLUMN
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  // NAGŁÓWKI KOLUMN
  title: {
    fontSize: "12px",
    letterSpacing: "3px",
    marginBottom: "20px",
    opacity: 0.6,
    textTransform: "uppercase" as const,
  },

  // LISTY W KOLUMNACH
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "34px",
    opacity: 0.9,
    fontSize: "15px",
  },

  // ZWYKŁY TEKST
  text: {
    opacity: 0.7,
    fontSize: "15px",
  },

  // DOLNA LINIA COPYRIGHT
  bottom: {
    marginTop: "60px",
    textAlign: "center" as const,
    opacity: 0.4,
    fontSize: "12px",
    letterSpacing: "2px",
  },
};
