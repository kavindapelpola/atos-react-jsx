import { Meta } from "@storybook/react";
import { Button, HighlightedButton } from "./button";
import { Main } from "./main";
import { Row } from "./row";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Main>
    <Row>
      <Button>Button</Button>
    </Row>
  </Main>
);

export const Highlighted: React.VFC<{}> = () => (
  <Main>
    <Row>
      <HighlightedButton>Highlighted</HighlightedButton>
    </Row>
  </Main>
);
