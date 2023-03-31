import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css"
function Footer(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
<footer>
  <p
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{ fontSize: "17px", color: isHovered ? "purple" : "white" }}
  >
    <strong>
      <span style={{ color: "purple" }}>Maybe you didn't know that:</span>{" "}
      {props.funFact}
    </strong>
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

    const fetchFact = () => {
      fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => setFact(data[0].fact));
    };

    fetchFact();

    const intervalId = setInterval(fetchFact, 10000); // fetch a new fact every 10 seconds

    return () => clearInterval(intervalId); // clear the interval after the first fetch
  }, []);



  const personalDetails = {
    name: "Ciao, I'm Alessandro Mordini.",
    location: "New York & Florence (IT)",
    tagline: `<h2>I'm a Software Engineer.</h2>`,
    email: "alessandro.mordini@gmail.com",
    availability: "English, Italian, Spanish",
    brand:
  <strong>
    I am innovative and entrepreneurial, well-structured and willing to listen. I believe in teamwork, informal networks, open innovation, and the adoption of a pervasive growth mindset framework as essential assets to run high performance IT organizations.
     I am proficient at: <span style={{color: 'purple'}}><br /> HTML | CSS | JavaScript | Node.js | Express.js | MongoDB | Mongoose | React | SQL | Python</span>
  </strong>,

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
