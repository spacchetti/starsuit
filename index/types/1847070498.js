// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1847070498"] = [{"values":[{"sourceSpan":{"start":[2663,1],"name":".spago/option/v6.1.0/src/Option.purs","end":[2670,8]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"getWithDefault","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["value",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["option'",{"tag":"ForAll","contents":["option",{"tag":"ForAll","contents":["label",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value"},{"tag":"TypeVar","contents":"option'"},{"tag":"TypeVar","contents":"option"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"value"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}]},{"tag":"TypeVar","contents":"value"}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempts to fetch the value at the given key from an option falling back to the default.\n\nIf the key exists in the option, `Just _` is returned.\n\nIf the key does not exist in the option, `Nothing` is returned.\n\nE.g.\n```PureScript\nsomeOption :: Option.Option ( foo :: Boolean, bar :: Int )\nsomeOption = Option.insert (Data.Symbol.SProxy :: _ \"bar\") 31 Option.empty\n\nbar :: Int\nbar = Option.getWithDefault 13 (Data.Symbol.SProxy :: _ \"bar\") someOption\n```\n\nThe `proxy` can be anything so long as its type variable has kind `Symbol`.\n\nIt will commonly be `Data.Symbol.SProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"}]