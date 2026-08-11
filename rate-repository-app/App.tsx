import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import AppBar from "./src/components/AppBar";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";

export default function App() {
  return (
    <NativeRouter>
      <View style={{ flex: 1, backgroundColor: "#e1e4e8" }}>
        <AppBar />

        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}
