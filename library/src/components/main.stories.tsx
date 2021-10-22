import { Meta } from "@storybook/react";
import { Main } from "./main";

export default {
  component: Main,
  title: "Components/Main",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>Wrap everything in main</Main>
);
