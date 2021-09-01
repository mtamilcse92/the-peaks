import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContentCard from "./index";

describe("<ContentCard /> spec", () => {
  it("renders the ContentCard", () => {
    const WithDefaultImage = render(
      <ContentCard
        title="Test title"
        subtitle="test sub title"
        onClick={jest.fn()}
      />
    );
    const WithCustomImage = render(
      <ContentCard
        title="Test title"
        imageUrl="https://media.guim.co.uk/ecf0db0f2a9a036453cdaf9978b73bc8d7a733b4/17_0_1125_675/500.jpg"
        subtitle="test sub title"
        onClick={jest.fn()}
      />
    );
    expect(WithCustomImage).toMatchSnapshot();
    expect(WithDefaultImage).toMatchSnapshot();
  });

  it("should fire the onclick callback props", () => {
    const onClick = jest.fn();
    const Component = render(
      <ContentCard
        title="Test title"
        subtitle="test sub title"
        onClick={onClick}
      />
    );
    fireEvent.click(Component.getByRole("article"));
    expect(onClick).toHaveBeenCalled();
  });
});
