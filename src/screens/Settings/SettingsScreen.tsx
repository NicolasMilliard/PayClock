import { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/index";

import IconTitle from "../../components/Titles/IconTitle/IconTitle";

const SettingsScreen: FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <IconTitle
        imageSource={require("../../../assets/icons/go_back/go_back.png")}
        customFunc={handleGoBack}
        text="Settings"
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({});

export default SettingsScreen;
