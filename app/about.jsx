import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors.js";
import React from "react";

const About = () => {
  const colorScheme = useColorScheme();
  //console.log(colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.title}>About Page</Text>

      <Link href="/" style={styles.link}>
        Back Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
