import { Route, Routes } from "react-router-dom";

import Favorite from "./pages/favorite";

import IndexPage from "@/pages/index";
import Memes from "@/pages/memes";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Memes />} path="/memes" />
      <Route element={<Favorite />} path="/favorite" />
    </Routes>
  );
}

export default App;
