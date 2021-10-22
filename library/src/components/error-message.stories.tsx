import { Meta } from "@storybook/react";
import { ErrorMessage } from "./error-message";
import { Main } from "./main";

export default {
  component: ErrorMessage,
  title: "Components/ErrorMessage",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <ErrorMessage>Some error</ErrorMessage>
  </Main>
);
