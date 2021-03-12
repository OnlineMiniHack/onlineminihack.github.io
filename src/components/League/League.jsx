import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const League = () => {
  const { league } = useContext(PortfolioContext);

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
    <section id="League">      
      <Container>
        <div className="project-wrapper">
          <Title title="League" />
          {console.log(league)}          
          { 
            league
              .filter(a => a.consent == true)
              .sort((a, b) => {
                return a.score > b.score ? -1 : 1;
              })
              .map((entry) => {
                const { name, score } = entry;

                return (
                  <Row>
                    <Col lg={4} sm={12}>{ name }</Col>
                    <Col lg={8} sm={12}>{ score }</Col>
                  </Row>
                );
              })
          }
        </div>
      </Container>
    </section>
  );
};

export default League;
