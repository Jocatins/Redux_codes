import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Home = () => {
  return (
    <div className="container">
      <h2>Titans homepage</h2>
      <p>
        Materialize comes in two different forms. You can select which version you want depending on
        your preference and expertise. To start using Materialize, all you have to do is download
        one of the options below.
      </p>
    </div>
  );
};

export default Rainbow(Home);
