import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";
import "./bg.scss";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects}/>
          </Switch>
        </div>
      </Router>

      <a className="github-btn" href="https://github.com/CharlieLMAO"><i class="fab fa-github fa-2x"></i></a>
    </>
  );
}

export default App;
