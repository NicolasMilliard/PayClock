import { FC } from "react";
import { View } from "react-native";
import { ImageSourcePropType } from "react-native";

import styles from "./styles";

import MainTitle from "../MainTitle/MainTitle";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

interface Props {
  imageSource: ImageSourcePropType;
  customFunc: () => void;
  text: string;
}

const IconTitle: FC<Props> = ({ imageSource, customFunc, text }) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.buttonWrapper}>
        <SecondaryButton imageSource={imageSource} customFunc={customFunc} />
      </View>
      <MainTitle text={text} />
    </View>
  );
};

export default IconTitle;
