import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import RepositoryList from "./src/components/RepositoryList";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  );
}
