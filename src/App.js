import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Param from './components/Param';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import Protected from './components/Protected';
import HTTP from './components/HTTP';
import Container from './components/context/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <NavLink className="custom-link" to="/">Main</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/param/lakhan/1">Params</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/contact">Nested</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/filter">Filters</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/http">HTTP</NavLink>
          </li>
          <li>
            <NavLink className="custom-link" to="/context">Context</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/home' element={<Protected Component={Home} />} />
          <Route path='/param/:user/:id' element={<Protected Component={Param} />} />
          <Route path='/filter' element={<Protected Component={Filter} />} />
          <Route path='/contact/' element={<Protected Component={Contact} />}>
            <Route path='about' element={<Protected Component={About} />} />
            <Route path='blog' element={<Protected Component={Blog} />} />
          </Route>
          <Route path='/http' element={<Protected Component={HTTP} />} />
          <Route path='/context' element={<Protected Component={Container} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
