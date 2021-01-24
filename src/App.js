import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as StyledProvider } from 'styled-components';
import MediaQueryProvider from './context/MediaQuery/MediaQueryContext';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"/>

      <Router>
        <MediaQueryProvider>
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Provider>
        </MediaQueryProvider>
      </Router>
    </StyledProvider>
  );
}