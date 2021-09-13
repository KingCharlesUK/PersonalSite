import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
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
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>

      <a className="github-btn" href="https://github.com/CharlieLMAO"><i class="fab fa-github fa-2x"></i></a>
      <div class="night">
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
      </div>
    </>
  );
}

export default App;
