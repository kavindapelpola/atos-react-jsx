import { Meta } from "@storybook/react";
import { Title } from "./title";
import { Main } from "./main";

export default {
  component: Title,
  title: "Components/Title",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <Title title="title" user="username@domain" prodUrl="http://prod.url" />
  </Main>
);