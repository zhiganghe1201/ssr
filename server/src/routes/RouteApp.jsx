import React from "react";
import routesConfig from "./routesConfig";
import { renderRoutes } from 'react-router-config';

export default function RouteApp() {
  return (
    <div>
      {renderRoutes(routesConfig)}
    </div>
  );
}
