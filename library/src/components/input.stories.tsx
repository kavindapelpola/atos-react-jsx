import { Meta } from '@storybook/react';
import React from 'react';
import { Input } from './input';
import { Main } from './main';
import { Row } from './row';
import { InputArea } from './input-area';

export default {
  component: Input,
  title: 'Components/Inputs',
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
          onChange={setVal}
          width={200}
        />
      </Row>
    </Main>
  );
};

export const Hint: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          hint="hint here..."
        />
      </Row>
    </Main>
  );
};

export const Disabled: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          disabled
        />
      </Row>
    </Main>
  );
};

export const NoTitle: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input name="example" value={val} onChange={setVal} width={200} />
      </Row>
    </Main>
  );
};

export const PrimaryInputError: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          error="some error"
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
          onChange={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};

export const PrimaryInputInfo: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="info-example"
          title="Info example"
          value={val}
          onChange={setVal}
          width={200}
          info={() => {}}
        />
      </Row>
    </Main>
  );
};

export const PrimaryInputInfoError: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <Input
          name="info-example"
          title="Info example"
          value={val}
          onChange={setVal}
          width={200}
          error="some error"
          info={() => {}}
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
          onChange={setVal}
          width={200}
          rows={3}
        />
      </Row>
    </Main>
  );
};

export const AreaHint: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          rows={3}
          hint="hint here..."
        />
      </Row>
    </Main>
  );
};

export const AreaDisabled: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          rows={3}
          disabled
        />
      </Row>
    </Main>
  );
};

export const AreaNoTitle: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          value={val}
          onChange={setVal}
          width={200}
          rows={3}
        />
      </Row>
    </Main>
  );
};

export const AreaInputInfo: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          rows={3}
          info={() => {}}
        />
      </Row>
    </Main>
  );
};

export const AreaInputInfoError: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          width={200}
          rows={3}
          info={() => {}}
          error="some error"
        />
      </Row>
    </Main>
  );
};

export const AreaInputOnBlur: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  const [error, setError] = React.useState<string>();
  return (
    <Main>
      <Row>
        <InputArea
          name="example"
          title="example"
          value={val}
          onChange={setVal}
          onBlur={() => {
            setError('validation error');
          }}
          width={200}
          rows={3}
          info={() => {}}
          error={error}
        />
      </Row>
    </Main>
  );
};
