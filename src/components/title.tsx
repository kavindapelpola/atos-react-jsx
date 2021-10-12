import styled from "styled-components";

const TitleBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #1a202c;
  padding: 0.75rem 1.5rem;
`;

const LangButtons = styled.div`
  display: flex;
  align-items: right;
`;

const LangButton = styled.button`
  background: none !important;
  border: none;
  padding: 5 !important;
  cursor: pointer;
  color: white;
`;

const AtosLogo = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

const HeaderLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0;
  text-transform: uppercase;
`;

const H1Test = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: red;
`;

const UserName = styled.div`
  display: flex;
  align-items: right;
  margin-right: 1rem;
  color: white;
`;

type Props = {
  title: string;
  user: string;
  prodUrl: string;
  lang?: string;
  langs?: string[];
  setLang?: React.Dispatch<React.SetStateAction<string>>;
};

const host = window.location.protocol + "//" + window.location.hostname;

export const Title: React.FC<Props> = (props: Props) => {
  return (
    <TitleBar aria-label="top-bar">
      <HeaderLink>
        <AtosLogo src="/atos-logo.png" />
        {host === props.prodUrl ? (
          <H1>{props.title}</H1>
        ) : (
          <H1Test>{props.title} - NON-PROD</H1Test>
        )}
      </HeaderLink>
      <LangButtons>
        <UserName>{props.user}</UserName>
        {props.lang &&
          props.langs &&
          props.setLang &&
          props.langs.map((lang) => {
            return (
              <LangButton
                name={lang}
                onClick={() => {
                  props.setLang && props.setLang(lang);
                }}
              >
                {props.lang === lang ? (
                  <span>
                    <strong>
                      <em>{lang.toUpperCase()}</em>
                    </strong>
                  </span>
                ) : (
                  <span>{lang.toUpperCase()}</span>
                )}
              </LangButton>
            );
          })}
      </LangButtons>
    </TitleBar>
  );
};
