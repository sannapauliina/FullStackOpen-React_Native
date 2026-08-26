import { Formik } from "formik";
import * as Yup from "yup";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
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
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must be at least 5 characters")
    .max(30, "Username must be at most 30 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
          />
          {errors.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
            value={values.passwordConfirm}
            onChangeText={handleChange("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <Text style={styles.error}>{errors.passwordConfirm}</Text>
          )}

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
