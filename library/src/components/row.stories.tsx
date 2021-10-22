import { Meta } from "@storybook/react";
import React from "react";
import { Input } from "./input";
import { Main } from "./main";
import { Row } from "./row";
import { InputArea } from "./input-area";
import { Button } from "./button";
import { DropDown } from "./drop-down";
import { CheckBox } from "./check-box";

export default {
  component: Row,
  title: "Components/Row",
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  const [val4, setVal4] = React.useState<boolean>();
  const [val5, setVal5] = React.useState<boolean>();
  return (
    <Main>
      <Row>
        <Input
          name="example1"
          title="example1"
          value={val}
          setValue={setVal}
          width={200}
        />
        <InputArea
          name="example2"
          title="example2"
          value={val}
          setValue={setVal}
          width={200}
          rows={3}
        />
        <DropDown
          name="example3"
          title="example3"
          options={["Option1", "Option2"]}
          value={val}
          setValue={setVal}
          width={200}
        />
        <CheckBox
          name="example4"
          title="example4"
          value={val4}
          setValue={setVal4}
        />
        <CheckBox
          name="example5"
          title="example5"
          value={val5}
          setValue={setVal5}
        />
        <Button>Button</Button>
      </Row>
    </Main>
  );
};
