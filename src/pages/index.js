import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mini Hack</title>
        <html lang="en" />
        <meta
          name="description"
          content="MiniHack is a monthly meetup where teams of between 3 and 6 people compete to produce the best solution to a given problem."
        />
      </Helmet>
      <App />
    </>
  );
};
