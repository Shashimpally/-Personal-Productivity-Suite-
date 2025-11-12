import React, { useState } from "react";
import Calculator from "./components/Calculator";
import NotesList from "./components/Notes/NotesList";
import NoteEditor from "./components/Notes/NoteEditor";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  // 🎨 Define all your color and layout styles
  const styles = {
    app: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      background: "linear-gradient(180deg, #f0f4f9 0%, #e9eef4 100%)",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
    },
    header: {
      background: "#1e3a8a", // deep navy blue
      color: "#fff",
      padding: "15px 30px",
      textAlign: "center",
      fontSize: "1.8rem",
      letterSpacing: "1px",
      fontWeight: "600",
      boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      padding: "30px",
    },
    card: {
      background: "#fff",
      flex: "1 1 400px",
      maxWidth: "600px",
      borderRadius: "14px",
      padding: "20px 25px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-4px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    },
    sectionTitle: {
      borderBottom: "3px solid #1e3a8a",
      paddingBottom: "8px",
      marginBottom: "15px",
      color: "#1e3a8a",
      fontSize: "1.3rem",
    },
  };

  // Small hover effect using React local state
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.app}>
      <header style={styles.header}>Personal Productivity Suite 💼</header>

      <div style={styles.container}>
        {/* Calculator Section */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "calc" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("calc")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={styles.sectionTitle}>🧮 Calculator</h2>
          <Calculator />
        </div>

        {/* Notes Section */}
        <div
          style={{
            ...styles.card,
            ...(hoveredCard === "notes" ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("notes")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={styles.sectionTitle}>📝 Notes</h2>
          <NotesList onEdit={setEditing} key={reloadKey} />
          {editing !== undefined && (
            <NoteEditor
              note={editing}
              onSaved={() => {
                setEditing(undefined);
                setReloadKey((k) => k + 1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
