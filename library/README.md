# Atos react jsx components

Use this library to import react components into your Atos apps. This library sets up
the layout, colour scheme, and design system required to build good compliant Atos
apps. These apps are typically internal to Atos and branded with Atos branding.

## Getting started

All you need to do if you're using yarn is

```
yarn add atos-react-jsx
```

## Implementing in the app

Make sure that your main App is wrapped in the react-router-dom with a history. Various
components such as the Title or MenuItems use useHistory to navigate. For example

```
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <React.StrictMode>
    <Router
      history={createBrowserHistory({
        basename: "",
        forceRefresh: false,
        keyLength: 6,
      })}
    >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Include the components you want with import statement, for example

```
import { <component> } from "atos-react-jsx";
```

A full list of components are available in the storybook

### Design system

Wrap the whole app in Main. Then select the components you want

```
Main (app wrapper)
|
|-- Title (Atos branded title banner)
|
|-- Menu (menu system)
|
|-- Content (attach your main content body here)
    |-- Row
```
