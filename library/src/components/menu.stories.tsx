import { Meta } from "@storybook/react";
import { Main } from "./main";
import { Menu } from "./menu";

export default {
  component: Menu,
  title: "Components/Menu",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <Menu>Some menu item</Menu>
  </Main>
);
