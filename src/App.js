import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import DesignTab from './pages/Design';
import Page404 from './pages/404';


function App() {
  return (

    <Router>
      <Routes>

        <Route path='/' Component={Home}></Route>
        <Route path='/Design' Component={DesignTab}></Route>
        <Route path='/About' Component={About}></Route>


        <Route path='*' Component={Page404}></Route>
      </Routes>
    </Router>

  );
}

export default App;
