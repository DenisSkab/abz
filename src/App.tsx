import React from 'react';

import Header from './components/header';

import './assest/scss/main.scss';
import BlockOne from './components/blockOne';
import BlockTwo from './components/blockTwo';
import BlockThree from './components/blockThree';

function App() {
  return (
    <div className='app'>
      <Header />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
    </div>
  );
}

export default App;
