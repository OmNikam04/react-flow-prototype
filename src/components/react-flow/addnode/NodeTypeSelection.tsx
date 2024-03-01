import React from 'react';

const NodeTypeSelection = ({ onSelectNodeType }) => {
  const handleSelect = (nodeType:any) => {
    onSelectNodeType(nodeType);
  };

  return (
    <div>
      <button onClick={() => handleSelect('input')}>Input Node</button>
      <button onClick={() => handleSelect('output')}>Output Node</button>
      {/* Add more buttons for other node types */}
    </div>
  );
};

export default NodeTypeSelection;
