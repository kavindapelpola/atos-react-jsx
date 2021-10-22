import { Meta } from "@storybook/react";
import React from "react";
import { CheckBox } from "./check-box";
import { Main } from "./main";
import { Row } from "./row";

export default {
  component: CheckBox,
  title: "Components/CheckBox",
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<boolean>();
  return (
    <Main>
      <Row>
        <CheckBox
          name="example"
          title="example"
          value={val}
          setValue={setVal}
        />
      </Row>
    </Main>
  );
};
