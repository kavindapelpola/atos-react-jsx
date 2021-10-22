import { Meta } from "@storybook/react";
import React from "react";
import { Input } from "./input";
import { Main } from "./main";
import { Row } from "./row";
import { InputArea } from "./input-area";

export default {
  component: Input,
  title: "Components/Inputs",
} as Meta;

export const PrimaryInput: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="example"
          title="example"
          value={val}
          setValue={setVal}
          width={200}
        />
      </Row>
    </Main>
  );
};

export const PrimaryInputWide: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="wide-example"
          title="Wide example"
          value={val}
          setValue={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};

export const AreaInput: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          setValue={setVal}
          width={200}
          rows={3}
        />
      </Row>
    </Main>
  );
};
