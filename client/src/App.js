import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Home from './components/Home';
import TutorialsIndex from './components/TutorialsIndex';
import ViewTutorial from './components/ViewTutorial';
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
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<TutorialsIndex />} />
          <Route path="/tutorials/:id" element={<ViewTutorial />} />
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
