import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutesConfig from "./routerConfig";

const routes = () => {
  return (
    <Switch>
      {RoutesConfig.map(routeData => {
        return (
          <Route
            {...routeData}
            key={routeData.path ? routeData.path : "not found"}
          />
        );
      })}
    </Switch>
  );
};

export default routes;
