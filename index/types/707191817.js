// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["707191817"] = [{"values":[{"sourceSpan":{"start":[2531,1],"name":".spago/option/v6.0.0/src/Option.purs","end":[2539,16]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"insert","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["value",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["option'",{"tag":"ForAll","contents":["option",{"tag":"ForAll","contents":["label",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value"},{"tag":"TypeVar","contents":"option'"},{"tag":"TypeVar","contents":"option"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"option'"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"value"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Adds a new key with the given value to an option.\nThe key must not already exist in the option.\nIf the key might already exist in the option, `set` should be used instead.\n\nE.g.\n```PureScript\nsomeOption :: Option.Option ( foo :: Boolean )\nsomeOption = Option.empty\n\nanotherOption :: Option.Option ( foo :: Boolean, bar :: Int )\nanotherOption = Option.insert (Data.Symbol.SProxy :: _ \"bar\") 31 someOption\n```\n\nThe `proxy` can be anything so long as its type variable has kind `Symbol`.\n\nIt will commonly be `Data.Symbol.SProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"}]