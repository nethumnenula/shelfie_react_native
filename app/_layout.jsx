import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors.js";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  //console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      {Platform.OS === "android" && (
        <RNStatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={theme.navBackground}
        />
      )}

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: theme.background,
          },
          animation: "slide_from_right",
          animationMatchesGesture: true,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="About" options={{ title: "About" }} />
        <Stack.Screen name="Contact" options={{ title: "Contact" }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
