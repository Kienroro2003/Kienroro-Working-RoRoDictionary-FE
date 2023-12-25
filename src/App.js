import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import TestUIStules from "./pages/TestUIStyles";
import TestUIStyles from "./pages/TestUIStyles";

function App() {
  return (
    <Routes>
      <Route
        path="/test-ui-styles"
        element={<TestUIStyles></TestUIStyles>}
      ></Route>
    </Routes>
  );
}

export default App;
