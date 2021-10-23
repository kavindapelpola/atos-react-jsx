import { Meta } from '@storybook/react';
import React from 'react';
import { DropDown } from './drop-down';
import { Main } from './main';
import { Row } from './row';
import { DropDownMulti } from './drop-down-multi';

export default {
  component: DropDown,
  title: 'Components/DropDown',
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={['Option1', 'Option2']}
          value={val}
          setValue={setVal}
          width={200}
        />
      </Row>
    </Main>
  );
};

export const PrimaryInfo: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={['Option1', 'Option2']}
          value={val}
          setValue={setVal}
          width={200}
          info={() => {}}
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
          name="wide-example"
          title="wide example"
          options={[
            'Wide option with lots of writing 1',
            'Wide option with lots of writing 2',
          ]}
          value={val}
          setValue={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};

export const Loading: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>();
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={[
            'Wide option with lots of writing 1',
            'Wide option with lots of writing 2',
          ]}
          value={val}
          setValue={setVal}
          width={200}
          loading={true}
        />
      </Row>
    </Main>
  );
};

export const Disabled: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string>('default');
  return (
    <Main>
      <Row>
        <DropDown
          name="example"
          title="example"
          options={[
            'Wide option with lots of writing 1',
            'Wide option with lots of writing 2',
          ]}
          value={val}
          setValue={setVal}
          width={200}
          disabled={true}
        />
      </Row>
    </Main>
  );
};

export const Multi: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string[]>();
  return (
    <Main>
      <Row>
        <DropDownMulti
          name="multi-example"
          title="multi-example"
          options={['multi 1', 'multi 2', 'multi 3', 'multi 4', 'multi 5']}
          value={val}
          setValue={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};

export const MultiNoTitle: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string[]>();
  return (
    <Main>
      <Row>
        <DropDownMulti
          name="multi-example"
          options={['multi 1', 'multi 2', 'multi 3', 'multi 4', 'multi 5']}
          value={val}
          setValue={setVal}
          width={400}
        />
      </Row>
    </Main>
  );
};
