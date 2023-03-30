import { useState, useEffect } from 'react';
import AboutMe from '../../components/AboutMe';
import PageHeader from '../../components/PageHeader';

const About = ({ name, location, brand, email, availability }) => {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 1;
        const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
          headers: { 'X-Api-Key': 'ghaAGfEQVpEsvSf8CXqrXQ==WoF15QEIeW2BjKz3' },
        });
        const data = await response.json();
        setFact(data[0].fact);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="about">
      <PageHeader title="About Me" description="Who am I?" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} fact={fact} />
    </section>
  );
};

export default About;
