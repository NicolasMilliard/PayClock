import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

interface Props {
  imageSource: ImageSourcePropType;
  customFunc: () => void;
}

const SecondaryButton: FC<Props> = ({ imageSource, customFunc }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={customFunc}>
      <Image source={imageSource} />
    </TouchableOpacity>
  );
};

export default SecondaryButton;
