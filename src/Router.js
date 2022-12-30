import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Public from "./Public";
import Profile from "./Profile";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <Public />,
      },
      {
        path: "protected",
        element: <Protected />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
