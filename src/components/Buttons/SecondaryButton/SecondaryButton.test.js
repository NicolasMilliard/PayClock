import { render } from "@testing-library/react-native";
import { toHaveProp, toBeOnTheScreen } from "@testing-library/jest-native";

import SecondaryButton from "./SecondaryButton";

// Extend expect with jest-native
expect.extend({ toHaveProp, toBeOnTheScreen });

describe("SecondaryButton Component", () => {
  // Variables used through all tests
  const imageSource = require("../../../../assets/icons/start/start.png");
  const mockCustomFunc = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display the image button", () => {
    const { getByTestId } = render(<SecondaryButton imageSource={imageSource} customFunc={mockCustomFunc} />);

    const imageButton = getByTestId("button-image");
    expect(imageButton).toHaveProp("source", imageSource);
  });

  it("should display the button", () => {
    const { getByTestId } = render(<SecondaryButton imageSource={imageSource} customFunc={mockCustomFunc} />);

    const button = getByTestId("button");
    expect(button).toBeOnTheScreen();
  });
});
