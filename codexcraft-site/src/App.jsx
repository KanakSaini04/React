import { useState } from "react";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "sans-serif", margin: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(2,6,23,0.6)",
        backdropFilter: "blur(10px)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        zIndex: 1000
      }}>
        <h3>CodeXCraft</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <span onClick={() => scrollTo("about")} style={{ cursor: "pointer" }}>About</span>
          <span onClick={() => scrollTo("projects")} style={{ cursor: "pointer" }}>Projects</span>
          <span onClick={() => scrollTo("contact")} style={{ cursor: "pointer" }}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem" }}>🚀 CodeXCraft</h1>
        <h2>Hi, I’m Kanak</h2>
        <p>Android Developer | React Learner</p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            borderRadius: "20px",
            border: "none",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onClick={() => scrollTo("projects")}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#020617",
        color: "white"
      }}>
        <h2>About Me</h2>
        <p>
          I build Android apps using Jetpack Compose and now exploring React.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{
        padding: "80px 20px",
        background: "#0f172a",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Projects</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>

          {/* CARD 1 */}
          <div
            style={{
              padding: "20px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              width: "250px",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>Quotes App</h3>
            <p>Jetpack Compose app with clean UI</p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              padding: "20px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              width: "250px",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>Calculator UI</h3>
            <p>Glass UI style calculator</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#020617",
        color: "white"
      }}>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}

export default App;