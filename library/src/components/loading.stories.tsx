import { Loading } from './loading';
import { Meta } from '@storybook/react';

export default {
  component: Loading,
  title: 'Components/Loading',
} as Meta;

export const PrimaryInput: React.VFC<{}> = () => {
  return <Loading />;
};
