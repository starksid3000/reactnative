import { StyleSheet, useColorScheme, Image } from "react-native";

import lightLogo from "../assets/favicon.png";
import darkLogo from "../assets/favicon2.png";

const ThemedLogo = () => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? darkLogo : lightLogo;
  return <Image source={logo} style={styles.image} />;
};

export default ThemedLogo;
const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
});
