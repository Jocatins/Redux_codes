import React from 'react';

const Titan = ({ titans, deleteTitan }) => {
  const titanList = titans.map((titan) => {
    return (
      <div className="titan" key={titan.id}>
        <div>Name {titan.name}</div>
        <div>Age {titan.age}</div>
        <div>Job {titan.job}</div>
        <button
          onClick={() => {
            deleteTitan(titan.id);
          }}
        >
          Delete Titan
        </button>
      </div>
    );
  });
  return <div className="titan-list">{titanList}</div>;
};

export default Titan;
