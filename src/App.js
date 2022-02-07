import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Drawings from "./components/Drawings";
import Works from "./components/Works";
import Exhibitions from "./components/Exhibitions";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/drawings" component={Drawings} />
            <Route exact path="/paintings" component={Works} />
            <Route exact path="/exhibitions" component={Exhibitions} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
