import { Meta } from "@storybook/react";
import { Main } from "./main";

export default {
  component: Main,
  title: "Components/Main",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>Main content goes here including title and menu</Main>
);
