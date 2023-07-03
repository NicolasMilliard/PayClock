import { fireEvent, render } from "@testing-library/react-native";
import { toHaveProp, toHaveTextContent, toBeOnTheScreen } from "@testing-library/jest-native";

import Button from "./Button";

// Extend expect with jest-native
expect.extend({ toHaveProp, toHaveTextContent, toBeOnTheScreen });

describe("Button Component", () => {
  // Variables used through all tests
  const textButton = "Click me";
  const lightImage = require("../../../../assets/images/icons/light/start/start.png");
  const darkImage = require("../../../../assets/images/icons/dark/start/start.png");
  const mockCustomFunc = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the button", () => {
    const { getByTestId } = render(
      <Button text={textButton} imageSource={lightImage} customFunc={mockCustomFunc} darkMode={false} />
    );

    const button = getByTestId("button");
    expect(button).toBeOnTheScreen();
  });

  it("should display the light image button", () => {
    const { getByTestId } = render(
      <Button text={textButton} imageSource={lightImage} customFunc={mockCustomFunc} darkMode={false} />
    );

    const imageButton = getByTestId("button-image");
    expect(imageButton).toHaveProp("source", lightImage);
  });

  it("should display the dark image button when in Dark mode", () => {
    const { getByTestId } = render(
      <Button text={textButton} imageSource={darkImage} customFunc={mockCustomFunc} darkMode={true} />
    );

    const imageButton = getByTestId("button-image");
    expect(imageButton).toHaveProp("source", darkImage);
  });

  it("should display the text button", () => {
    const { getByTestId } = render(
      <Button text={textButton} imageSource={lightImage} customFunc={mockCustomFunc} darkMode={false} />
    );

    const text = getByTestId("button-text");
    expect(text).toHaveTextContent("Click me");
  });

  it("should call the customFunc when button is pressed", () => {
    const { getByTestId } = render(
      <Button text={textButton} imageSource={lightImage} customFunc={mockCustomFunc} darkMode={false} />
    );

    const button = getByTestId("button");
    fireEvent.press(button);
    expect(mockCustomFunc).toHaveBeenCalledTimes(1);
  });
});
