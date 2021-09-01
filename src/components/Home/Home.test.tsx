import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./index";
import PersistContextProvider from '../../context/persistContext';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";
const queryClient = new QueryClient();

describe("<Home  /> spec", () => {
  it("renders the Home", () => {
    const history = createMemoryHistory();
    history.push(
      `/?id=film/2021/mar/29/selfie-review-gallic-slaves-to-the-algorithm`
    );
    const Component = render(
      <PersistContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Home />
        </Router>
      </QueryClientProvider>
      </PersistContextProvider>
    );
    expect(Component).toMatchSnapshot();
  });
});

