import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 15,
  },
  scroll: {
    flexDirection: "row",
  },
  tab: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
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
      </ScrollView>
    </View>
  );
};

export default AppBar;
