import { Meta } from "@storybook/react";
import { Content } from "./content";
import { Main } from "./main";

export default {
  component: Content,
  title: "Components/Content",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <Content>Some content</Content>
  </Main>
);
