import React from "react";
import { render } from "@testing-library/react";
import PageHeader from "./index";

describe("<PageHeader  /> spec", () => {
  it("renders the PageHeader", () => {
    const WithOutRHS = render(<PageHeader title="All Bookmarks" />);
    const WithCustomRHS = render(
      <PageHeader
        title="All Bookmarks"
        rhsElement={<div>Show All Bookmarks</div>}
      />
    );
    expect(WithCustomRHS.getByText("Show All Bookmarks")).toBeInTheDocument();
    expect(WithCustomRHS).toMatchSnapshot();
    expect(WithOutRHS).toMatchSnapshot();
  });
});
