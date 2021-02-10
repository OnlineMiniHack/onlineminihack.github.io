import React, { useState, useEffect } from 'react';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Projects from './Projects/Projects';
import Join from './Join/Join';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, joinData, footerData } from '../data/data';

function App() {  
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [join, setJoin] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {    
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setJoin({ ...joinData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, join, footer }}>
      <Introduction />
      <About />
      <Projects />
      <Join />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
