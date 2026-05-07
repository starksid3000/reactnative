import { StyleSheet, Text, Image, View } from "react-native";
import { Link } from "expo-router";
import icon from "../assets/favicon2.png";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <ThemedText title={true} style={styles.title}>
        Home
      </ThemedText>
      <ThemedText>Home page description</ThemedText>
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
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
    fontSize: 18,
  },
  image: {
    width: 48,
    height: 48,
  },
  link: {
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
