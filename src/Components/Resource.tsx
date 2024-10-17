import React from 'react';

type ResourceProps = {
  name: string;
  amount: number;
};

const Resource: React.FC<ResourceProps> = ({ name, amount }) => {
  return (
    <div className="Resource">
      <p>{name}: <span>{amount}</span></p>
      <div className="buttonContainer">
        <button className="button">-</button>
        <button className="button">+</button>
      </div>
    </div>
  );
};

export default Resource;