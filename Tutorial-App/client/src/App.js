import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTutorial from './components/CreateGuide';
import Tutorials from './components/Tutorials';
import EditGuide from './components/EditGuide';
import ViewGuide from './components/ViewGuide';
import Search from './components/Search';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/tutorials")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
    <header className="App-header">
      
    </header>
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTutorial />} />
          <Route path="/tutorials" element={<Tutorials />} />
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
