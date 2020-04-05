// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["904643587"] = [{"values":[{"sourceSpan":{"start":[253,1],"name":".spago/react-basic/v13.0.0/src/React/Basic.purs","end":[258,9]},"score":0,"packageName":"react-basic","name":"makeStateless","moduleName":"React.Basic","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"Component"]},{"tag":"TypeVar","contents":"props"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Makes stateless component definition slightly less verbose:\n\n```purs\ncomponent :: Component Props\ncomponent = createComponent \"Xyz\"\n\nmyComponent :: Props -> JSX\nmyComponent = makeStateless component \\props -> JSX\n```\n\n__*Note:* The only difference between a stateless React-Basic component and\n  a plain `props -> JSX` function is the presense of the component name\n  in React's dev tools and error stacks. It's just a conceptual boundary.\n  If this isn't important simply write a `props -> JSX` function.__\n\n__*See also:* `make`, `createComponent`, `Component`, `ComponentSpec`__\n"}],"tag":"SearchResult"}]