import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "../SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByTestId("usernameField"), "kalle");
      fireEvent.changeText(screen.getByTestId("passwordField"), "password123");

      fireEvent.press(screen.getByTestId("submitButton"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
          username: "kalle",
          password: "password123",
        });
      });
    });
  });
});
