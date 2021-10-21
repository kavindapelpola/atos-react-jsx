import { Meta } from "@storybook/react";
import { ErrorMessage } from "./error-message";

export default {
  component: ErrorMessage,
  title: "Components/ErrorMessage",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <ErrorMessage>Some error</ErrorMessage>
);
