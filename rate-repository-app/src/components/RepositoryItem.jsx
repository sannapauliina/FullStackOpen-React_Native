import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flexShrink: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
    color: "#586069",
  },
  language: {
    backgroundColor: "#0366d6",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },

  githubButton: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  githubButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const formatCount = (value) => {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
};

const RepositoryItem = ({ item, showGithubButton }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.topRow}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {formatCount(item.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>

      {showGithubButton && (
        <Pressable
          style={styles.githubButton}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text style={styles.githubButtonText}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
