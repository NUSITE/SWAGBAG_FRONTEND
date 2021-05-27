import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Switch>
          <Route path="/" exact>
            <div>App Checking</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
