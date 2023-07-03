import { FC } from "react";
import Button from "../Button/Button";

interface Props {
  darkMode: boolean;
  isPaused: boolean;
  customFunc: () => void;
}

const handleImage = (darkMode: boolean, isPaused: boolean) => {
  const imagePath = darkMode
    ? isPaused
      ? "../../../../assets/images/icons/dark/resume/resume.png"
      : "../../../../assets/images/icons/dark/pause/pause.png"
    : isPaused
    ? "../../../../assets/images/icons/light/resume/resume.png"
    : "../../../../assets/images/icons/light/pause/pause.png";

  return imagePath;
};

const TimerButton: FC<Props> = ({ darkMode, isPaused, customFunc }) => {
  return (
    <Button
      darkMode={darkMode}
      text={isPaused ? "Resume" : "Pause"}
      imageSource={require(handleImage(darkMode, isPaused))}
      customFunc={customFunc}
    />
  );
};

export default TimerButton;
