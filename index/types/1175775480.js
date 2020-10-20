// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1175775480"] = [{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/halogen-hooks/v0.4.3/src/Halogen/Hooks.purs","end":[120,27]},"score":1,"packageInfo":{"values":["halogen-hooks"],"tag":"Package"},"name":"useTickEffect","moduleName":"Halogen.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Types"],"MemoValues"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Hook"],"Hook"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Halogen","Hooks"],"UseEffect"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A Hook providing the ability to run an effect after every render, which\nincludes the first time the hook is run.\n\nThis Hook can be given an array of memo values as a performance optimization.\nIf the provided array is empty, the effect will run on every render. If the\narray contains values, then the effect will only run on renders in which one\nor more of the memo values have changed.\n\nTo run an effect on every render:\n\n```purs\nHooks.captures {} Hooks.useTickEffect do\n  ...\n```\n\nTo run an effect on the first render and when a particular value has changed:\n\n```purs\nHooks.captures { memoA, memoB } Hooks.useTickEffect do\n  ...\n```\n"}],"tag":"SearchResult"}]