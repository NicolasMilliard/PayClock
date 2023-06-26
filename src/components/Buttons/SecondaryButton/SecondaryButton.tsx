import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

interface Props {
  darkMode: boolean;
  imageSource: ImageSourcePropType;
  customFunc: () => void;
}

const SecondaryButton: FC<Props> = ({ darkMode, imageSource, customFunc }) => {
  return (
    <TouchableOpacity
      testID="button"
      style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]}
      onPress={customFunc}
    >
      <Image testID="button-image" source={imageSource} />
    </TouchableOpacity>
  );
};

export default SecondaryButton;
