import { FC } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

interface Props {
  text: string;
  imageSource: ImageSourcePropType;
  customFunc: () => void;
}

const Button: FC<Props> = ({ text, imageSource, customFunc }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={customFunc}>
      <Image source={imageSource} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
