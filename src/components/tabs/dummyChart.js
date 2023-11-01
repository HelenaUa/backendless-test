import React from 'react';

function DummyChart() {
  return (
    <div  
      style={{
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center' 
      }}
    >
      <h1>Dummy Chart</h1>
        Welcome {' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
    </div>
  );
};

export default DummyChart;