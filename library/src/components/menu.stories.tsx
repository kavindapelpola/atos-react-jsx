import { Meta } from '@storybook/react';
import React from 'react';
import { DropDownMulti } from './drop-down-multi';
import { Main } from './main';
import { Menu } from './menu';
import { MenuItem } from './menu-item';

export default {
  component: Menu,
  title: 'Components/Menu',
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

export const WithDropDownMulti: React.VFC<{}> = () => {
  const [val, setVal] = React.useState<string[]>();
  const [val2, setVal2] = React.useState<string[]>();
  return (
    <Main>
      <Menu>
        <DropDownMulti
          name="multi-example"
          options={['multi 1', 'multi 2', 'multi 3', 'multi 4', 'multi 5']}
          value={val}
          setValue={setVal}
          width={300}
        />
        <DropDownMulti
          name="multi-example2"
          options={['multi 1', 'multi 2', 'multi 3', 'multi 4', 'multi 5']}
          value={val2}
          setValue={setVal2}
          width={300}
        />
      </Menu>
    </Main>
  );
};
