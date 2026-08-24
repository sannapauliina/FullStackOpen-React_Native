import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
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
  ratingText: {
    color: "#0366d6",
    fontWeight: "bold",
    fontSize: 18,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "#586069",
    marginBottom: 5,
  },
  reviewText: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), "dd MMM yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{review.user.username}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Text style={styles.reviewText}>{review.text}</Text>
    </View>
  );
};

export default ReviewItem;
