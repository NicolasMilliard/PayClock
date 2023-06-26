import { render } from "@testing-library/react-native";
import { toHaveProp, toHaveTextContent, toBeOnTheScreen } from "@testing-library/jest-native";

import IconTitle from "./IconTitle";

// Extend expect with jest-native
expect.extend({ toHaveProp, toHaveTextContent, toBeOnTheScreen });

describe("IconTitle Component", () => {
  // Variables used through all tests
  const textTitle = "Hello!";
  const imageSource = require("../../../../assets/icons/go_back/go_back.png");
  const mockCustomFunc = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the icon", () => {
    const { getByTestId } = render(
      <IconTitle text={textTitle} imageSource={imageSource} customFunc={mockCustomFunc} />
    );

    const icon = getByTestId("button-image");
    expect(icon).toHaveProp("source", imageSource);
  });

  it("should display the text", () => {
    const { getByTestId } = render(
      <IconTitle text={textTitle} imageSource={imageSource} customFunc={mockCustomFunc} />
    );

    const text = getByTestId("title");
    expect(text).toHaveTextContent("Hello!");
  });

  it("should display the icon with the title", () => {
    const { getByTestId } = render(
      <IconTitle text={textTitle} imageSource={imageSource} customFunc={mockCustomFunc} />
    );

    const iconTitle = getByTestId("icon-title");
    expect(iconTitle).toBeOnTheScreen();
  });
});
