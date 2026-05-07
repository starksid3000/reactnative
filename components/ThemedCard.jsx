import { useColorScheme } from "react-native";
import { View, StyleSheet } from "react-native";
const ThemedCard = ({ style, ...props }) => {
  const themeColor = useColorScheme();
  const theme = Colors[themeColor] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};
export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
