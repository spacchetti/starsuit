// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2110201572"] = [{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/undefined-or/v1.0.1/src/Data/UndefinedOr.purs","end":[82,64]},"score":0,"packageInfo":{"values":["undefined-or"],"tag":"Package"},"name":"runUndefined","moduleName":"Data.UndefinedOr","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","UndefinedOr"],"UndefinedOr"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `maybe` but for undefined\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[217,1],"name":".spago/maybe/v4.0.1/src/Data/Maybe.purs","end":[217,51]},"score":92,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"maybe","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a default value, a function, and a `Maybe` value. If the `Maybe`\nvalue is `Nothing` the default value is returned, otherwise the function\nis applied to the value inside the `Just` and the result is returned.\n\n``` purescript\nmaybe x f Nothing == x\nmaybe x f (Just y) == f y\n```\n"}],"tag":"SearchResult"}]