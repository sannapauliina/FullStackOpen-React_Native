import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import AppBar from "./src/components/AppBar";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";
import SignOut from "./src/components/SignOut";
import RepositoryView from "./src/components/RepositoryView";
import CreateReview from "./src/components/CreateReview";
import SignUp from "./src/components/SignUp";
import MyReviews from "./src/components/MyReviews";

import { ApolloProvider } from "@apollo/client/react";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <View style={{ flex: 1, backgroundColor: "#e1e4e8" }}>
          <AppBar />

          <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/repository/:id" element={<RepositoryView />} />
            <Route path="/create-review" element={<CreateReview />} />
            <Route path="/my-reviews" element={<MyReviews />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

          <StatusBar style="auto" />
        </View>
      </NativeRouter>
    </ApolloProvider>
  );
}
