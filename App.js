import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";

import Main from "./src/navigation/Main/Main";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <ReduxProvider store={store}>
          <Main />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dceaee",
    alignItems: "center",
    justifyContent: "center",
  },
});
