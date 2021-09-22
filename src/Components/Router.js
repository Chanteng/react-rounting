import React from "react";
import About from "../Pages/About";
import Contacts from "../Pages/Contatcts";
import Services from "../Pages/Services";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Router() {
  return <div>

    <BrowserRouter>

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/contacts" component={Contacts} />
        <Route exact={true} path="/services" component={Services} />

    </BrowserRouter>

  </div>;
}

export default Router;
