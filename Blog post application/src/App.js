import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import ViewBlog from './components/ViewBlog';
import EditBlog from './components/EditBlog';

function App() {
  library.add(faThumbsUp);
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/addBlog" element={<AddBlog/>} />
                <Route path="/viewBlog/:id" element={<ViewBlog/>} />
                <Route path="/editBlog/:id" element={<EditBlog/>} />
            </Routes>
      </Router> 
    </div>
  );
}

export default App;
