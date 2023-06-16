import { StatusBar } from "expo-status-bar";
// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/navigation/Main/Main";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="Timer" component={TimerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
}
