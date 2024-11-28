import React from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <Background />
      <CustomCursor />
      <style>{`
        body {
          cursor: none;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}

export default App;