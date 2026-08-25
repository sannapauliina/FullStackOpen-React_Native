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
  error: {
    color: "red",
    marginBottom: 10,
  },
});

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required("Repository owner is required"),
  repositoryName: Yup.string().required("Repository name is required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),
  text: Yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Repository owner"
            value={values.ownerName}
            onChangeText={handleChange("ownerName")}
          />
          {errors.ownerName && (
            <Text style={styles.error}>{errors.ownerName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Repository name"
            value={values.repositoryName}
            onChangeText={handleChange("repositoryName")}
          />
          {errors.repositoryName && (
            <Text style={styles.error}>{errors.repositoryName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Rating (0-100)"
            value={values.rating}
            onChangeText={handleChange("rating")}
            keyboardType="numeric"
          />
          {errors.rating && <Text style={styles.error}>{errors.rating}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Review"
            value={values.text}
            onChangeText={handleChange("text")}
            multiline
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
