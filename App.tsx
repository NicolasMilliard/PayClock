// Redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
// Navigation
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomStatusBar from "./src/components/CustomStatusBar/CustomStatusBar";
import Main from "./src/navigation/Main/Main";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";

// Define the type for the navigation prop
export type ScreenNames = ["Main", "Timer", "Settings"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomStatusBar />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              <Stack.Screen name="Timer" component={TimerScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}
