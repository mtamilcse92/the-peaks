import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Bookmark from "./index";

describe("<Bookmark /> spec", () => {
  it("renders the Bookmark", () => {
    const container = render(
      <Bookmark label="Add to bookmark" onClick={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should display the label", () => {
    const Component = render(
      <Bookmark label="Add to bookmark" onClick={jest.fn()} />
    );
    expect(Component.getByText("Add to bookmark")).toBeInTheDocument();
  });

  it("should Call the onClick", () => {
    const onClick = jest.fn();
    const Component = render(
      <Bookmark label="Add to bookmark" onClick={onClick} />
    );
    fireEvent.click(Component.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
