import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./index";
import { contentSort } from '../../../constants/index'

describe("<Dropdown /> spec", () => {
  it("renders the Dropdown", () => {
    const Component = render(<Dropdown onSelect={jest.fn()} />);
    expect(Component).toMatchSnapshot();
  });

  it("should not render selected value", () => {
    const onClick = jest.fn();
    render(
      <Dropdown
        selected={contentSort[1]}
        onSelect={onClick}
      />
    );
    expect(screen.getAllByText(contentSort[1].label)).toHaveLength(2);
  });

  it("should fire the onselect props", () => {
    const onClick = jest.fn();
    const Component = render(
      <Dropdown
        onSelect={onClick}
      />
    );
    fireEvent.click(Component.getByText(contentSort[1].label));
    expect(onClick).toHaveBeenCalled();
  });
});
