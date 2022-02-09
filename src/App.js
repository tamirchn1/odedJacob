import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CV from "./components/CV";
import Drawings from "./components/Drawings";
import Paintings from "./components/Paintings";
import Exhibitions from "./components/Exhibitions";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Media from "./components/media/Media";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={CV} />
            <Route exact path="/drawings" component={Drawings} />
            <Route exact path="/paintings" component={Paintings} />
            <Route exact path="/exhibitions" component={Exhibitions} />
            <Route exact path="/Media" component={Media} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
