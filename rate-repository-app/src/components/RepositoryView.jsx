import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const RepositoryView = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;

  const repository = data.repository;

  return (
    <View>
      <RepositoryItem item={repository} showGithubButton />

      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(repository.url)}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryView;
