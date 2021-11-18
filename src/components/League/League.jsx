import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Table, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import md5 from 'md5';

const League = () => {
  const { league } = useContext(PortfolioContext);

  const scores = league.filter(a => a.consent == true && a.score > 0)
    .sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });


  return (
    <section id="League">
      <Container>
        <Title title="League" />
        <Table striped bordered hover style={{textAlign:'left'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {
              scores.map(({ name, score, emailHash }, index) => (
                <tr key={name}>
                  <td>{index+1}</td>
                  <td>
                    <Image style={{marginRight: "5px"}} src={`https://www.gravatar.com/avatar/${emailHash || md5(name)}?s=24&d=robohash`} alt={name} roundedCircle />
                    <span>{name}</span>
                  </td>
                  <td>{score}</td>
                </tr>
              )
              )
            }
          </tbody>
        </Table>
        <p>Your name will only be on here if you have explicitly consented to it</p>
      </Container>
    </section>
  );
};

export default League;
