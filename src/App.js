import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Alessandro Mordini",
    location: "New York, NY",
    tagline: "I'm a Software Engineer",
    email: "alessandro.mordini@gmail.com",
    availability: "Let's connect!",
    brand:
      "My expertise",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
