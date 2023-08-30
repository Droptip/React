import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Add from './Add';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        {/* Add more routes here if needed */}
      </Switch>
    </Router>
  );
}

export default App;

