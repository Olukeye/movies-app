import './app.scss'
import Home from './pages/homepage/Home'
import Watch from './pages/watch-movies/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Home/>
          </Route>
        </Switch>
      </Router>
    )
  };

  export default App;
  