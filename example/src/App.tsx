import "./App.css";
import {
  Main,
  Title,
  Menu,
  MenuItem,
  Row,
  DropDown,
  Button,
  Input,
  InputArea,
} from "atos-react-jsx";
import React from "react";

function App() {
  const [input, setInput] = React.useState<string>();
  const [inputArea, setInputArea] = React.useState<string>();
  const [select, setSelect] = React.useState<string>();
  const [select2, setSelect2] = React.useState<string>();
  const [select2Error, setSelect2Error] = React.useState<string>();
  const [lang, setLang] = React.useState<string>("en");
  return (
    <Main>
      <Title
        title="Example"
        user="user"
        prodUrl="http://prod"
        lang={lang}
        setLang={setLang}
        langs={["en", "de", "fr"]}
      />
      <Menu>
        <MenuItem title="Item1" path="/test1" />
        <MenuItem title="Item2" path="/test2" />
        <MenuItem title="Item3" path="/" />
        <MenuItem title="Item4" path="/" />
        <MenuItem title="Item5" path="/" />
      </Menu>
      <Row>
        test&nbsp;&nbsp;
        <DropDown
          name="test"
          title="test title"
          value={select}
          options={["OPT1", "OPT2"]}
          setValue={setSelect}
          width={200}
          error={select === "OPT1" ? "dont choose opt1" : undefined}
        />
        <Button onClick={() => setSelect2Error("here")}>hello</Button>
      </Row>
      <Row>
        test2&nbsp;&nbsp;
        <DropDown
          name="tes2"
          title="test title2"
          value={select2}
          options={["OPT1", "OPT2"]}
          setValue={setSelect2}
          width={100}
          error={select2Error}
        />
        <Input
          title="input-test"
          name="input-test"
          width={100}
          value={input}
          setValue={setInput}
        />
        <InputArea
          title="input-test"
          name="input-test"
          width={300}
          rows={4}
          value={inputArea}
          onChange={setInputArea}
        />
      </Row>
    </Main>
  );
}

export default App;
