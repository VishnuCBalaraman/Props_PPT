
import React from 'react';

interface ChildComponentProps {
  onButtonClick: (message: string) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ onButtonClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => onButtonClick("Hello from Child!")}>
        Click Me
      </button>
    </div>
  );
};

export default ChildComponent;
