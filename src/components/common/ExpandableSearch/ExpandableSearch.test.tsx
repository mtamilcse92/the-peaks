import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ExpandableSearch from "./index";

describe("<ExpandableSearch /> spec", () => {
  it("renders the ExpandableSearch", () => {
    const Component = render(
      <ExpandableSearch
        value="Test"
        placeholder="enter values"
        onChange={jest.fn()}
      />
    );
    expect(Component).toMatchSnapshot();
  });

  it("should not render selected value", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ExpandableSearch
        value="Test"
        placeholder="enter values"
        onChange={onChange}
      />
    );
    const searchInput = getByPlaceholderText("enter values");
    searchInput.onchange = onChange
    fireEvent.change(searchInput, {
      target: { value: "new value" },
    });
    expect(onChange).toHaveBeenCalled();
  });
});
