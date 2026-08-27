import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";

import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

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
  const { data } = useQuery(ME);
  const user = data?.me;

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

        {user && (
          <Pressable>
            <Link to="/create-review">
              <Text style={styles.tab}>Create a review</Text>
            </Link>
          </Pressable>
        )}

        {user && (
          <Pressable>
            <Link to="/my-reviews">
              <Text style={styles.tab}>My reviews</Text>
            </Link>
          </Pressable>
        )}

        {!user && (
          <Pressable>
            <Link to="/signup">
              <Text style={styles.tab}>Sign up</Text>
            </Link>
          </Pressable>
        )}

        {user ? (
          <Pressable>
            <Link to="/signout">
              <Text style={styles.tab}>Sign out</Text>
            </Link>
          </Pressable>
        ) : (
          <Pressable>
            <Link to="/signin">
              <Text style={styles.tab}>Sign in</Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
