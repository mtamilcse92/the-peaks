import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Bookmarks from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";
const queryClient = new QueryClient();

describe("<Bookmarks  /> spec", () => {
  it("renders the Bookmarks", () => {
    const history = createMemoryHistory();
    history.push(
      `/?id=film/2021/mar/29/selfie-review-gallic-slaves-to-the-algorithm`
    );
    const Component = render(
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Bookmarks />
        </Router>
      </QueryClientProvider>
    );
    expect(Component).toMatchSnapshot();
  });
});