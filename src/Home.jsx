function Home() {
  const handleClick = () => {
    console.log("Create an ReactGa.event");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick}>Läs Mer</button>
    </div>
  );
}

export default Home;
