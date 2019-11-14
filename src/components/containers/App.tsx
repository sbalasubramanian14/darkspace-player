import * as React from "react";
import DarkPlayer from "./DarkPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={DarkPlayer} />
        <Route exact path="/:activeVideo" component={DarkPlayer} />
        {/* Other route not found component */}
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
);

// Styles
const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
  }
`;

export default App;
