import { FC } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  text: string;
  imageSource: ImageSourcePropType;
  customFunc: () => void;
}

const Button: FC<Props> = ({ darkMode, text, imageSource, customFunc }) => {
  return (
    <TouchableOpacity
      testID="button"
      style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]}
      onPress={customFunc}
    >
      <Image testID="button-image" source={imageSource} />
      <Text testID="button-text" style={[styles.buttonText, darkMode ? styles.darkButtonText : styles.lightButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
