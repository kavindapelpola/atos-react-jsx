import { Meta } from "@storybook/react";
import { Main } from "./main";
import { Menu } from "./menu";
import { MenuItem } from "./menu-item";

export default {
  component: Menu,
  title: "Components/Menu",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <Menu></Menu>
  </Main>
);

export const WithItem: React.VFC<{}> = () => (
  <Main>
    <Menu>
      <MenuItem title="Item1" path="path" />
    </Menu>
  </Main>
);
