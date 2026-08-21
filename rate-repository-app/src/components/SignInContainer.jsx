import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { Formik } from "formik";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const SignInContainer = ({ onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values }) => (
        <View style={styles.container}>
          <TextInput
            testID="usernameField"
            style={styles.input}
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
          />

          <TextInput
            testID="passwordField"
            style={styles.input}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />

          <Pressable
            testID="submitButton"
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;
