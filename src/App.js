import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function Footer(props) {
  return (
    <footer>
      <p style={{ fontSize: '22px', color: 'white' }}>
        <strong>Maybe you didn't know that: {props.funFact}</strong>
      </p>
    </footer>
  );
}


function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const limit = 1;
    const url = `https://api.api-ninjas.com/v1/facts?limit=${limit}`;
    const headers = {
      "X-Api-Key": "ghaAGfEQVpEsvSf8CXqrXQ==WoF15QEIeW2BjKz3",
    };

    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => setFact(data[0].fact));
  }, []);

  const personalDetails = {
    name: "Ciao, I'm Alessandro Mordini.",
    location: "New York & Milan (IT)",
    tagline: `I'm a Software Engineer.`,
    email: "alessandro.mordini@gmail.com",
    availability: "English, Italian, Spanish",
    brand:
      "I am innovative and entrepreneurial, well-structured and willing to listen. I believe in teamwork, informal networks, open innovation, and the adoption of a pervasive growth mindset framework as essential assets to run high performance IT organizations. I am proficient with: HTML | CSS | JavaScript | Node.js | Express.js | MongoDB | Mongoose | React | SQL | Python",
    funFact: fact,
  };

  return (
    <>
      <Header funFact={fact} />
      <AnimatedRoutes personalDetails={{ ...personalDetails }} />
      <Footer funFact={fact} />
    </>
  );
}

export default App;
export { Footer };
