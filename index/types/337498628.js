// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["337498628"] = [{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/halogen-hooks/v0.4.2/src/Halogen/Hooks/HookM.purs","end":[165,56]},"score":0,"packageName":"halogen-hooks","name":"raise","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["o",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Types"],"OutputToken"]},{"tag":"TypeVar","contents":"o"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Raise an output message for the component. Requires a token carrying the\noutput type of the component, which is provided by the `Hooks.component`\nfunction.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/halogen-hooks/v0.4.2/src/Halogen/Hooks/HookM.purs","end":[159,62]},"score":0,"packageName":"halogen-hooks","name":"put","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Types"],"StateId"]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Overwrite a piece of state using an identifier received from the `useState` hook.\n\n```purs\n_ /\\ countId :: StateId Int <- Hooks.useState 0\n\nlet\n  onClick = do\n    Hooks.put countId 10\n```\n"}],"tag":"SearchResult"}]