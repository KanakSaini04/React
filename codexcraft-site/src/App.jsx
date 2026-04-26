function App() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px",
        background: "#0f172a",
        color: "white"
      }}>
        <h1>🚀 CodeXCraft</h1>
        <h2>Hi, I’m Kanak</h2>
        <p>Android Developer | React Learner</p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>About Me</h2>
        <p>
          I build Android apps using Jetpack Compose and now exploring React.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "50px 20px", background: "#f1f5f9" }}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>

          <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            width: "250px"
          }}>
            <h3>Quotes App</h3>
            <p>Jetpack Compose app with clean UI</p>
          </div>

          <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            width: "250px"
          }}>
            <h3>Calculator UI</h3>
            <p>Glass UI style calculator</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}

export default App;