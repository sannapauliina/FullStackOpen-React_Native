import { useApolloClient } from "@apollo/client";
import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";

const SignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = new AuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const doSignOut = async () => {
      await authStorage.removeAccessToken();

      await apolloClient.resetStore();

      navigate("/repositories");
    };

    doSignOut();
  }, []);

  return null;
};

export default SignOut;
