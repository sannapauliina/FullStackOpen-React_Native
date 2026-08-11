import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 15,
    flexDirection: "row",
    gap: 20,
  },
  tab: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
      </Pressable>

      <Pressable>
        <Link to="/signin">
          <Text style={styles.tab}>Sign in</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;
