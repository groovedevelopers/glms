import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Redirect,
  Route,
} from "react-router-dom";
import Chart from "./pages/clients/chart";
import Course from "./pages/clients/course";
// import { GuardProvider, GuardedRoute } from "react-router-guards";
import Dashboard from "./pages/clients/dashboard";
import Live from "./pages/clients/live";
import Profile from "./pages/clients/profile";
import Signals from "./pages/clients/signals";
import Support from "./pages/clients/support";
import TechArticles from "./pages/clients/techart";
import Technicals from "./pages/clients/technicals";
import Videos from "./pages/clients/videos";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>

          <Route exact path="/">
            <Redirect to="/dashboard"  />
          </Route>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/course" exact component={Course} />
          <Route path="/chart" exact component={Chart} />
          <Route path="/signals" exact component={Signals} />
          <Route path="/live" exact component={Live} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/technicals" exact component={Technicals} />
          <Route path="/techart" exact component={TechArticles} />
          <Route path="/support" exact component={Support} />

          <Route path="/profile" exact component={Profile} />


        </Switch>
      </Suspense>

      
    </Router>
  );
};

export default App;
