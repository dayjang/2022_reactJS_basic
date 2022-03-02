import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Rounter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
      </Switch>
    </Rounter>
  );
}

export default App;
