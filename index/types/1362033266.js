// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1362033266"] = [{"values":[{"sourceSpan":{"start":[80,1],"name":".spago/react-basic-classic/v1.0.1/src/React/Basic/Classic.purs","end":[87,6]},"score":2,"packageInfo":{"values":["react-basic-classic"],"tag":"Package"},"name":"ComponentSpec","moduleName":"React.Basic.Classic","info":{"values":[{"type":{"tag":"RCons","contents":["initialState",{"tag":"TypeVar","contents":"state"},{"tag":"RCons","contents":["render",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Classic"],"Self"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]},{"tag":"RCons","contents":["didMount",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Classic"],"Self"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"RCons","contents":["shouldUpdate",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Classic"],"Self"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["nextProps",{"tag":"TypeVar","contents":"props"},{"tag":"RCons","contents":["nextState",{"tag":"TypeVar","contents":"state"},{"tag":"REmpty","contents":{}}]}]}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"RCons","contents":["didUpdate",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Classic"],"Self"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["prevProps",{"tag":"TypeVar","contents":"props"},{"tag":"RCons","contents":["prevState",{"tag":"TypeVar","contents":"state"},{"tag":"REmpty","contents":{}}]}]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},{"tag":"RCons","contents":["willUnmount",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Classic"],"Self"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]},"arguments":[["props",null],["state",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"`ComponentSpec` represents a React-Basic component implementation.\n\nThese are the properties your component definition may override\nwith specific implementations. None are required to be overridden, unless\nan overridden function interacts with `state`, in which case `initialState`\nis required (the compiler enforces this).\n\n- `initialState`\n  - The component's starting state.\n  - Avoid mirroring prop values in state.\n- `render`\n  - Takes a current snapshot of the component (`Self`) and converts it to renderable `JSX`.\n- `didMount`\n  - The React component's `componentDidMount` lifecycle. Useful for initiating an action on first mount, such as fetching data from a server.\n- `shouldUpdate`\n  - Can be useful for performance optimizations. Rarely necessary.\n- `didUpdate`\n  - The React component's `componentDidUpdate` lifecycle. Rarely necessary.\n- `willUnmount`\n  - The React component's `componentWillUnmount` lifecycle. Any subscriptions or timers created in `didMount` or `didUpdate` should be disposed of here.\n\nThe component spec is generally not exported from your component\nmodule and this type is rarely used explicitly. `make` will validate whether\nyour component's internal types line up.\n\nFor example:\n\n```purs\ncomponent :: Component Props\ncomponent = createComponent \"Counter\"\n\ntype Props =\n  { label :: String\n  }\n\ncounter :: Props -> JSX\ncounter = make component\n  { initialState: { counter: 0 }\n\n  , render: \\self ->\n      R.button\n        { onClick: capture_ $ self.setState \\s -> s { counter + 1 }\n        , children: [ R.text (self.props.label <> \": \" <> show self.state.counter) ]\n        }\n  }\n```\n\nThis example component overrides `initialState` and `render`.\n\n__*Note:* A `ComponentSpec` is *not* a valid React component by itself. If you would like to use\n  a React-Basic component from JavaScript, use `toReactComponent`.__\n\n__*See also:* `Component`, `ComponentSpec`, `make`, `makeStateless`__\n"}],"tag":"SearchResult"}]