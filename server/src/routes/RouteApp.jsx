import React from "react";
import { Route, Switch } from "react-router-dom";
import routesConfig from "./routesConfig";
import Header from "@/components/Header";
import { renderRoutes } from 'react-router-config';

export default function RouteApp() {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          padding: 50
        }}
      >
        {renderRoutes(routesConfig)}
      </div>
    </div>
  );
}
