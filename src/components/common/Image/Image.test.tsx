import React from "react";
import { render } from "@testing-library/react";
import Image from "./index";

describe("<Image /> spec", () => {
  it("renders the Image", () => {
    const WithDefaultImage = render(
      <Image/>
    );
    const WithCustomImage = render(
      <Image
      imageURL="https://media.guim.co.uk/ecf0db0f2a9a036453cdaf9978b73bc8d7a733b4/17_0_1125_675/500.jpg"
      />
    );
    expect(WithCustomImage).toMatchSnapshot();
    expect(WithDefaultImage).toMatchSnapshot();
  });
});
