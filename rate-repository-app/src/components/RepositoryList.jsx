import { useState } from "react";
import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    padding: 10,
    backgroundColor: "white",
  },
  option: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const OrderSelector = ({ order, setOrder }) => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Order by: {order}</Text>

      <Pressable onPress={() => setOrder("latest")}>
        <Text style={styles.option}>Latest repositories</Text>
      </Pressable>

      <Pressable onPress={() => setOrder("highest")}>
        <Text style={styles.option}>Highest rated</Text>
      </Pressable>

      <Pressable onPress={() => setOrder("lowest")}>
        <Text style={styles.option}>Lowest rated</Text>
      </Pressable>
    </View>
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");
  const navigate = useNavigate();

  let orderBy = "CREATED_AT";
  let orderDirection = "DESC";

  if (order === "highest") {
    orderBy = "RATING_AVERAGE";
    orderDirection = "DESC";
  }

  if (order === "lowest") {
    orderBy = "RATING_AVERAGE";
    orderDirection = "ASC";
  }

  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
  });

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<OrderSelector order={order} setOrder={setOrder} />}
    />
  );
};

export default RepositoryList;
