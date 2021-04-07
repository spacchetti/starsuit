// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["87504137"] = [{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/debug/v5.0.0/src/Debug.purs","end":[31,59]},"score":7,"packageInfo":{"values":["debug"],"tag":"Package"},"name":"trace","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Debug"],"DebugWarning"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Log any PureScript value to the console for debugging purposes and then\nreturn a value. This will log the value's underlying representation for\nlow-level debugging, so it may be desireable to `show` the value first.\n\nThe return value is thunked so it is not evaluated until after the\nmessage has been printed, to preserve a predictable console output.\n\nFor example:\n``` purescript\ndoSomething = trace \"Hello\" \\_ -> ... some value or computation ...\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[67,1],"name":".spago/prelude/v5.0.0/src/Data/Function.purs","end":[67,47]},"score":179,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"applyFlipped","moduleName":"Data.Function","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Applies an argument to a function. This is primarily used as the `(#)`\noperator, which allows parentheses to be omitted in some cases, or as a\nnatural way to apply a value to a chain of composed functions.\n"}],"tag":"SearchResult"}]