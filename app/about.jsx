import { StyleSheet, Text, Image, View } from "react-native";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}> About Page</Text>
      <Link href="/">Home Page</Link>
    </ThemedView>
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
    fontSize: 18,
  },
});
