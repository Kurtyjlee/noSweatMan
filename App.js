import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/Login";
import HomePage from "./screens/HomePage";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

// UnComment these lines of code when finalising.
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state. Check:",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  [isLogin, setLogin] = useState(false);

  function ChangeNavigation() {
    return !isLogin ? (
      <>
        <Stack.Navigator>
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{ headerShown: false }}
            initialParams={{ setState: setLogin }}
          />
        </Stack.Navigator>
      </>
    ) : (
      <MainContainer />
    );
  }

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <ChangeNavigation />
      </NavigationContainer>
    </>
  );
}
