import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";
import { Link } from "expo-router";
import Logo from "../assets/img/logo_light.png";

// themed component
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img}></Image>
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <Link href="/About" style={styles.link}>About Page</Link>
      <Link href="/Contact" style={styles.link}>Contact Page</Link>
    </ThemedView>
  );
};

export default Home;

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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
});
