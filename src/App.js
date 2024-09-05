import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Lanka Travel Diaries";
  }, []); // Runs only once when the component mounts

  const destinations = [
    {
      name: "Sigiriya",
      description: "Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m high.",
      image: "https://telegra.ph/file/5116ba0bce42460d4b0e8.png",
    },
    {
      name: "Adam’s Peak",
      description: "Adam's Peak is a 2,243 m (7,359 ft) tall conical sacred mountain located in central Sri Lanka. It is well known for the Sri Pada, a 1.8 m rock formation near the summit whose name is also used for the mountain itself.",
      image: "https://telegra.ph/file/881f26a2fdc7bd8b5c277.png",
    },
    {
      name: "Horton Plains",
      description: "Horton Plains National Park is a national park in the central highlands of Sri Lanka that was designated in 1988. It is located at an elevation of 2,100–2,300 m and encompasses montane grassland and cloud forest. It is rich in biodiversity and many species found here are endemic to the region.",
      image: "https://telegra.ph/file/ae22b0fcec1c94849c986.png",
    },
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lanka Travel Diaries</h1>
        <div className="destinations">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
