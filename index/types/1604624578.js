// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1604624578"] = [{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/halogen-store/v0.1.1/src/Halogen/Store/Connect.purs","end":[40,38]},"score":0,"packageInfo":{"values":["halogen-store"],"tag":"Package"},"name":"connect","moduleName":"Halogen.Store.Connect","info":{"values":[{"type":{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["store",{"tag":"ForAll","contents":["context",{"tag":"ForAll","contents":["query",{"tag":"ForAll","contents":["input",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Halogen","Store","Monad"],"MonadStore"],"constraintArgs":[{"tag":"TypeVar","contents":"action"},{"tag":"TypeVar","contents":"store"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Store","Select"],"Selector"]},{"tag":"TypeVar","contents":"store"}]},{"tag":"TypeVar","contents":"context"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Component"],"Component"]},{"tag":"TypeVar","contents":"query"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Store","Connect"],"Connected"]},{"tag":"TypeVar","contents":"context"}]},{"tag":"TypeVar","contents":"input"}]}}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Component"],"Component"]},{"tag":"TypeVar","contents":"query"}]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Connect a component to part of the store using a `Selector`. The selected\nstate will be provided as part of the component's input. Any time the\nselected state changes the component will be notified with new input.\n"}],"tag":"SearchResult"}]