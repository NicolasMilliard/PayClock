import { render } from "@testing-library/react-native";
import { toHaveProp, toHaveTextContent, toBeOnTheScreen } from "@testing-library/jest-native";

import Button from "./Button";

// Extend expect with jest-native
expect.extend({ toHaveProp, toHaveTextContent, toBeOnTheScreen });

describe("Button Component", () => {
  // Variables used through all tests
  const textButton = "Click me";
  const imageSource = require("../../../../assets/icons/start/start.png");
  const mockCustomFunc = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the image button", () => {
    const { getByTestId } = render(<Button text={textButton} imageSource={imageSource} customFunc={mockCustomFunc} />);

    const imageButton = getByTestId("button-image");
    expect(imageButton).toHaveProp("source", imageSource);
  });

  it("should display the text button", () => {
    const { getByTestId } = render(<Button text={textButton} imageSource={imageSource} customFunc={mockCustomFunc} />);

    const text = getByTestId("button-text");
    expect(text).toHaveTextContent("Click me");
  });

  it("should display the button", () => {
    const { getByTestId } = render(<Button text={textButton} imageSource={imageSource} customFunc={mockCustomFunc} />);

    const button = getByTestId("button");
    expect(button).toBeOnTheScreen();
  });
});
