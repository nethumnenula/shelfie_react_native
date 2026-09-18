import { StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

// themed component
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";

// util components
import Spacer from "../util/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <ThemedText>Reading List App</ThemedText>

      <Spacer height={20} />

      <Link href="/About" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/Contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
