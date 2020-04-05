// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["75147302"] = [{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/halogen-hooks/v0.1.0/src/Halogen/Hooks/HookM.purs","end":[128,75]},"score":0,"packageName":"halogen-hooks","name":"put","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["o",{"tag":"ForAll","contents":["ps",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"StateToken"]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"ps"}]},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Overwrite a piece of state using a token received from the `useState` hook.\n\n```purs\n_ /\\ countState :: StateToken Int <- useState 0\n\nlet\n  onClick = do\n    put countState 10\n```\n"}],"tag":"SearchResult"}]