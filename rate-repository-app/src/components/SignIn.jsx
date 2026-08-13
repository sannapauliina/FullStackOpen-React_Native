import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { Formik } from "formik";
import * as yup from "yup";

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
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.username && errors.username && styles.inputError,
            ]}
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.password && errors.password && styles.inputError,
            ]}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
