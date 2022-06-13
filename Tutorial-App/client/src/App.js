import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Home from './components/Home';
import Tutorials from './components/Tutorials';
import CreateTutorial from './components/CreateTutorial';
import EditTutorial from './components/EditTutorial';
import Search from './components/Search';




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
          <Route path="/" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/create" element={<CreateTutorial />} />
          <Route path="/edit/:id" element={<EditTutorial />} />
          <Route path="/search/:search" element={<Search/>} />
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;
