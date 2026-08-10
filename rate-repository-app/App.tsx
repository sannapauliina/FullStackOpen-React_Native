import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppBar from "./src/components/AppBar";
import RepositoryList from "./src/components/RepositoryList";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#e1e4e8" }}>
      <AppBar />
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  );
}
