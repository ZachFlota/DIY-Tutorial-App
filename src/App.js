
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateGuide from './components/CreateGuide';
import EditGuide from './components/EditGuide';
import ViewGuide from './components/ViewGuide';
import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DIY Tutorial App</h1>
      </header>
      <p className="App-intro">;{this.state.apiResponse}</p>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateGuide />} />
            <Route path="/edit/:id" element={<EditGuide />} />
            <Route path="/:id" element={<ViewGuide />} />
            <Route path="/search/:search" element={<Search/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
