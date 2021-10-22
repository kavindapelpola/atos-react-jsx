import { Meta } from "@storybook/react";
import React from "react";
import { DropDown } from "./drop-down";
import { Main } from "./main";
import { Row } from "./row";

export default {
  component: DropDown,
  title: "Components/DropDown",
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={["Option1", "Option2"]}
          value={val}
          setValue={setVal}
          width={200}
        />
      </Row>
    </Main>
  );
};

export const Wide: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={[
            "Wide option with lots of writing 1",
            "Wide option with lots of writing 2",
          ]}
          value={val}
          setValue={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};
