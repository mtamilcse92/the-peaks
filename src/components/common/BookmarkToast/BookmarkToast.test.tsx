import React from "react";
import { render, screen } from "@testing-library/react";
import BookmarkToast from "./index";

describe("<BookmarkToast /> spec", () => {
  it("renders the BookmarkToast", () => {
    const container = render(
      <BookmarkToast type="succuss" isVisible label="Add to bookmark" onClose={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should not render the component when visible is false", () => {
    render(
      <BookmarkToast type="succuss" isVisible={false} label="Add to bookmark" onClose={jest.fn()} />
    );
    expect(screen.queryByText("Add to bookmark")).toBeNull();
  });

  it("should change the view based on the type", () => {
    const Component = render(
      <BookmarkToast type="error" isVisible label="Add to bookmark" onClose={jest.fn()} />
    );
    expect(Component.container.getElementsByClassName("error")[0]).toBeTruthy();
  });

});
