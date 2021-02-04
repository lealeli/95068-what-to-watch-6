import React from 'react';
import Main from "./Main";

const App = (props) => {

  return (
    <React.Fragment>
      <Main {...props}/>
    </React.Fragment>
  );
};

export default App;
