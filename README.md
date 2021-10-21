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

Include the components you want with

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

## Developing the atos-react-jsx library

If you are developing the library you can test your code using the example app.
You will need to link the library using the below command in the library folder

```
yarn link
```

and then adding the library in the example app

```
yarn add atos-react-jsx
```

You can run the example app by running the command below from the example directory

```
yarn start
```
