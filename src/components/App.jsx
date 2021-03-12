import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Join from './Join/Join';
import Footer from './Footer/Footer';
import League from './League/League';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, leagueData, joinData, footerData } from '../data/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [league, setLeague] = useState([]);
  const [join, setJoin] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setLeague([...leagueData]);
    setJoin({ ...joinData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, league, join, footer }}>
      <Header />
      <About />
      <Projects />
      <League />
      <Join />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
