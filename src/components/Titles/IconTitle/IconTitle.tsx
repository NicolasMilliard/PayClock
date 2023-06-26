import { FC } from "react";
import { View } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

import MainTitle from "../MainTitle/MainTitle";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

interface Props {
  darkMode: boolean;
  imageSource: ImageSourcePropType;
  customFunc: () => void;
  text: string;
}

const IconTitle: FC<Props> = ({ darkMode, imageSource, customFunc, text }) => {
  return (
    <View testID="icon-title" style={styles.mainWrapper}>
      <View style={styles.buttonWrapper}>
        <SecondaryButton darkMode={darkMode} imageSource={imageSource} customFunc={customFunc} />
      </View>
      <MainTitle darkMode={darkMode} text={text} />
    </View>
  );
};

export default IconTitle;
