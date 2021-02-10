import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Join = () => {
  const { join } = useContext(PortfolioContext);
  const { cta, meetup } = join;

  return (
    <section id="join">
      <Container>
        <Title title="Join Us" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Would you like to take part?
            </p>
   
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero text-color-main"
              href={meetup}
            >
              Meetup Link
            </a>

          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Join;
