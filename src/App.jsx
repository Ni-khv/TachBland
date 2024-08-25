import React from 'react';
import './App.css';
import HeaderPage from './components/Header/HeaderPage/header_page';
import Ordi from './components/Content/ordi';


const App = () => {
  return (
    <body>
      <div className="App">
          <HeaderPage/>
          <Ordi/>
      </div>
    </body>
  );
}

export default App;
