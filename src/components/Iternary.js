import React from 'react';

const Titan = ({ titans }) => {
  //   const titanList = titans.map(titan) => {
  //     if (titan.age < 30) {
  //       return (
  //         <div className="titans" key={titan.id}>
  //           <h1>Name - {titan.name}</h1>
  //           <h1>Name - {titan.age}</h1>
  //           <h1>Name - {titan.job}</h1>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  //   const titanList = titans.map((titan) => {
  //     return titan.age < 30 ? (
  //       <div className="titans" key={titan.id}>
  //         <h1>Name - {titan.name}</h1>
  //         <h1>Name - {titan.age}</h1>
  //         <h1>Name - {titan.job}</h1>
  //       </div>
  //     ) : null;
  //   });
  return (
    <div className="titan-list">
      {titans.map((titan) => {
        return titan.age < 30 ? (
          <div className="titans" key={titan.id}>
            <h1>Name - {titan.name}</h1>
            <h1>Name - {titan.age}</h1>
            <h1>Name - {titan.job}</h1>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Titan;
