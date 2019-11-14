import * as React from "react";
import DarkPlayer from "./DarkPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Base = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DarkPlayer} />
      <Route exact path="/:activeVideo" component={DarkPlayer} />
      {/* Other route not found component */}
    </Switch>
  </BrowserRouter>
);

export default Base;
