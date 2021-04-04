import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../colors/Theme'
import { ThemeContext } from '../context/ThemeContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './Main/Main';
import Landing from './Landing/Landing';

function App() {

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Router>
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/library">
        <Main/>
      </Route>
      <Route exact path="/recent">
        <Main/>
      </Route>
      <Route exact path="/loved">
        <Main/>
      </Route>
      <Route exact path="/bin">
        <Main/>
      </Route>
    </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
