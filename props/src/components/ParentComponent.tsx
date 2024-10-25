
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const handleClick = (message: string): void => {
    console.log("Message from child:", message);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
