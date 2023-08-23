import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/" element={<Page1/>}  ></Route>
        <Route exact path="/page2" element={<Page2/>}  ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
