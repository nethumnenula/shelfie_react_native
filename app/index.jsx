import { StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

// themed component
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";

// util components
import Spacer from "../util/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img}></ThemedLogo>
      <Text style={styles.title}>The Number 1</Text>
      <Text>Reading List App</Text>
      <Spacer height={20} />
      <Link href="/About" style={styles.link}>
        About Page
      </Link>
      <Link href="/Contact" style={styles.link}>
        Contact Page
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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
