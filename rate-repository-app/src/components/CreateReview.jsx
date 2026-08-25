import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-native";

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useMutation(CREATE_REVIEW);

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    const result = await createReview({
      variables: {
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      },
    });

    const repositoryId = result.data.createReview.repositoryId;

    navigate(`/repository/${repositoryId}`);
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
