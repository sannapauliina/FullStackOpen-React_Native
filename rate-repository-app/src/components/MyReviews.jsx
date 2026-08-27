import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import Text from "./Text";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  review: {
    padding: 15,
    backgroundColor: "white",
  },
  separator: {
    height: 10,
  },
  ratingCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#0366d6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  const reviews = data?.me?.reviews?.edges.map((e) => e.node) || [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View style={styles.review}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.ratingCircle}>
              <Text style={{ color: "#0366d6", fontWeight: "bold" }}>
                {item.rating}
              </Text>
            </View>

            <View style={{ flexShrink: 1 }}>
              <Text fontWeight="bold">{item.repository.fullName}</Text>
              <Text color="textSecondary">
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>{item.text}</Text>

          <Pressable
            onPress={() => navigate(`/repository/${item.repository.id}`)}
            style={{ marginTop: 10 }}
          >
            <Text style={{ color: "#0366d6" }}>View repository</Text>
          </Pressable>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;
