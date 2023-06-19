import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./styles";

interface Props {
  customFunc: () => void;
}

const ResetButton: FC<Props> = ({ customFunc }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={customFunc}>
      <Image source={require("../../../../assets/icons/button/reset/reset.png")} />
    </TouchableOpacity>
  );
};

export default ResetButton;
