import { Meta } from '@storybook/react';
import { Title } from './title';
import { Main } from './main';
import React from 'react';

export default {
  component: Title,
  title: 'Components/Title',
} as Meta;

export const NonProd: React.VFC<{}> = () => (
  <Main>
    <Title title="title" user="username@domain" prodUrl="http://prod.url" />
  </Main>
);

export const Prod: React.VFC<{}> = () => (
  <Main>
    <Title title="title" user="username@domain" prodUrl="http://localhost" />
  </Main>
);

export const ProdLang: React.VFC<{}> = () => {
  const [lang, setLang] = React.useState<string>('en');
  return (
    <Main>
      <Title
        title="title"
        user="username@domain"
        prodUrl="http://localhost"
        lang={lang}
        setLang={setLang}
        langs={['en', 'de', 'fr']}
      />
    </Main>
  );
};
