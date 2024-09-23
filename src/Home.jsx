// src/Home.jsx
import ReactGA from "react-ga4";

function Home() {
  const handleClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked Learn More Button",
      label: "Home Page",
    });
    alert("Tack för ditt intresse!");
  };

  return (
    <div>
      <h1>Välkommen till vår React-applikation</h1>
      <p>Utforska våra funktioner!</p>
      <button onClick={handleClick}>Läs Mer</button>
    </div>
  );
}

export default Home;
