import { Meta } from "@storybook/react";
import { Content } from "./content";

export default {
  component: Content,
  title: "Components/Content",
} as Meta;

export const Primary: React.VFC<{}> = () => <Content>Some content</Content>;
