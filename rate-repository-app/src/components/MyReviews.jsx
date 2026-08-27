import { FlatList, View, StyleSheet, Pressable, Alert } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";
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

  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  const [deleteReview] = useMutation(DELETE_REVIEW);

  if (loading) return <Text>Loading...</Text>;

  const reviews = data?.me?.reviews?.edges.map((e) => e.node) || [];

  const handleDelete = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteReview({ variables: { id } });
            refetch();
          },
        },
      ],
    );
  };

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
            style={{
              marginTop: 10,
              backgroundColor: "#0366d6",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              View repository
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleDelete(item.id)}
            style={{
              marginTop: 10,
              backgroundColor: "#d73a4a",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;
