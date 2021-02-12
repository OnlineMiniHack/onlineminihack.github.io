import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Title from '../components/Title/Title';
import {questionData} from '../data/data';

const Faq = () => {
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
    <section id="faq">
      <Container>
        <Title title="Frequently asked questions" />
        <Row className="faq-wrapper">
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="faq-wrapper__info">
                <p className="faq-wrapper__info-text">
                  Here you&apos;ll find a list of commonly asked questions and answers regarding the Mini Hack event.
                  However if you can&apos;t find what you&apos;re looking for please send us a message and we&apos;ll try our best to help.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const QuestionsAndAnswers = ({ questions }) => {
  return (
    <section id="faq-questions">
      <Container>
        {questions.map((x, index) => (
          <Card key={`question-${index}`}>
            <Card.Header>{x.question}</Card.Header>
            <Card.Body>
              <Card.Text>{x.answer}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default () => {
  const questions = questionData.questions.map(q => ({
    question: q.question,
    answer: q.answer
  }));
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mini Hack - FAQ</title>
        <html lang="en" />
        <meta
          name="description"
          content="Find the most commonly asked questions about the Mini Hack event."
        />
      </Helmet>
      <Faq />
      <QuestionsAndAnswers questions={questions} />
    </>
  );
};
