import React from 'react';

import './styles/index.scss';

import { Report } from './components/report/Report';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Report />
    </div>
  );
}

export default App;
