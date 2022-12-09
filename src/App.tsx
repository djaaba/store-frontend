import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto";
import "normalize.css";

import { CounterHOC } from "./components";
import { Layout } from "./layout/Layout";
import "./App.css";

export const App = () => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent=
        {({ error }) => <pre>{error.message}</pre>}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/counter' element={<CounterHOC/>}/>
            </Route>
          </Routes>
      </ErrorBoundary>
    </>
  );
}