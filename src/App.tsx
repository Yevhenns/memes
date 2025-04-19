import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Memes from "@/pages/memes";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Memes />} path="/memes" />
    </Routes>
  );
}

export default App;
