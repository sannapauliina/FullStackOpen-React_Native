import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import SignUpForm from "./SignUpForm";
import { useSignIn } from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    await createUser({
      variables: {
        user: { username, password },
      },
    });

    await signIn({ username, password });

    navigate("/");
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
