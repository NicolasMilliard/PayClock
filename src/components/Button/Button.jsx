import { TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={imageSource} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
