import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {    
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="typed-title">
            Welcome to{' '}
            <span className="text-color-main">MiniHack</span>
            <br />
            Where we meet monthly to come up with cool solutions to  pointless problems
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="typed-cta">
            <span className="cta-btn cta-btn--typed">
              <Link to="about" smooth duration={1000}>
                <p className="typed-text">[Know more]</p>
              </Link>
            </span>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
