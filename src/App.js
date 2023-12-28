import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import TestUIStules from "./pages/TestUIStyles";
import TestUIStyles from "./pages/TestUIStyles";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Routes>
      <Route element={<Sidebar></Sidebar>}>
        <Route path="/" element={<></>}></Route>
        <Route
          path="/test-ui-styles"
          element={<TestUIStyles></TestUIStyles>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
