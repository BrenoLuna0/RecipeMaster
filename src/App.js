import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import RecipeCard from "./components/Recipe";
import api from "./services/api";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
