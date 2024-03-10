import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/Home/Homepage";
import MoviePage from "./page/Movies/MoviePage";
import ActorPage from "./page/Actor/ActorPage";

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/movie/:id", element: <MoviePage /> },
    { path: "/Actor", element: <ActorPage /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
