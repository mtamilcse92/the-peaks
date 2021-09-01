import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./index";

describe("<Spinner  /> spec", () => {
  it("renders the Spinner", () => {
    const VisibleTrue = render(<Spinner isVisible />);
    const VisibleFalse = render(
      <Spinner
        isVisible={false}
      />
    );
    expect(VisibleFalse).toMatchSnapshot();
    expect(VisibleTrue).toMatchSnapshot();
  });
});
