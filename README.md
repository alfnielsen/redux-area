# Redux-area

> Unless you don't want to use saga's, it recommended to install [`redux-saga-area`](https://www.npmjs.com/package/redux-saga-area) instead of `redux-area`

**Short:** `Simplified strongly typed redux`

When defining redux actions and reducers with typescript,
you often need a lot of typing for interfaces to ensure that you can use your actions,
action-creators and reducers with autocompletion ect.

Redux-area tries to simplify creation of redux logic by hiding / calculating types,
keeping the code more clean.

**The goal is:** to ease and reduce the amount of code we need to write to get all benefits of both

- redux _(single truth, deterministic state transition and view rendering, time travel ect..)_
  and
- typescript _(strongly typed symbols and interfaces, code checking/nullable check, auto-rewriting, autocompletion, auto-importing ect..)_.

Redux-area uses the [immer](https://github.com/immerjs/immer) npm module for keeping the reducers as simple as possible.

> You can create normal reducers if you need them

Github [Source Code](https://github.com/alfnielsen/redux-area) (The npm [package](https://www.npmjs.com/package/redux-area))

See codesandbox [Demo in React](https://codesandbox.io/s/redux-area-base-ex-tb1lr?fontsize=14&hidenavigation=1&theme=dark)

See Github Wiki for full [Documentation](https://github.com/alfnielsen/redux-area/wiki)

## See also

**redux-saga-area** Same functionality with added [redux-saga](https://redux-saga.js.org/) functionality

[redux-saga-area](https://www.npmjs.com/package/react-redux-area)

**react-redux-area** is another module the add React specific functionality to redux-area:

[react-redux-area](https://www.npmjs.com/package/react-redux-area)

## Install

```sh
npm install redux-area
```

Or

```sh
yarn add redux-area
```

You need to have installed: "immer": "^5.x", "redux": "^4.x",

Full install

```sh
yarn add immer redux redux-area
```

## Demo

_(editable codesandbox.io)_

Demo: [Demo in React](https://codesandbox.io/s/redux-area-base-ex-tb1lr?fontsize=14&hidenavigation=1&theme=dark)
