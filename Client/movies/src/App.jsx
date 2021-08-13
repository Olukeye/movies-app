import './app.scss'
import Home from './pages/homepage/Home'
import Watch from './pages/watch-movies/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

const App = () => {
  const user = true;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {/* if "?" is useer, redirect to homepage else ":" redirect to register page */}
            {user ? <Home /> : <Redirect to="/register" /> }
          </Route>
          <Route  path="/register">
            {!user ? <Register /> : <Redirect to="/" /> }
          </Route>
          <Route  path="/login">
            {!user ? <Login /> : <Redirect to="/" /> }
          </Route>
          {
          /* if there's a user, redirect to any of the bellow pages */
          user && (
          <>
            <Route path="/movies">
              <Home type="movies"/>
            </Route>
            <Route path="/series">
              <Home type="series"/>
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
          </>
          )}
        </Switch>
      </Router>
    )
  };

  export default App;
  