import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

// themed component
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}><ThemedText>Back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default Contact

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
})