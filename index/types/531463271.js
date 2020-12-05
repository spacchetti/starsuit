// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["531463271"] = [{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/shoronpo/v0.3.0/src/Shoronpo.purs","end":[15,16]},"score":0,"packageInfo":{"values":["shoronpo"],"tag":"Package"},"name":"formatSymbol","moduleName":"Shoronpo","info":{"values":[{"type":{"tag":"ForAll","contents":["proxyOrRec",{"tag":"ForAll","contents":["out",{"tag":"ForAll","contents":["row",{"tag":"ForAll","contents":["flist",{"tag":"ForAll","contents":["string",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Format"],"Parse"],"constraintArgs":[{"tag":"TypeVar","contents":"string"},{"tag":"TypeVar","contents":"flist"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Shoronpo"],"FormatSymbolParsed"],"constraintArgs":[{"tag":"TypeVar","contents":"flist"},{"tag":"TypeVar","contents":"row"},{"tag":"TypeLevelString","contents":""},{"tag":"TypeVar","contents":"out"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"string"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxyOrRec"},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"out"}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/record-extra/v3.0.1/src/Record/Extra.purs","end":[100,15]},"score":3,"packageInfo":{"values":["record-extra"],"tag":"Package"},"name":"zipRecord","moduleName":"Record.Extra","info":{"values":[{"type":{"tag":"ForAll","contents":["rc",{"tag":"ForAll","contents":["rb",{"tag":"ForAll","contents":["tb",{"tag":"ForAll","contents":["ra",{"tag":"ForAll","contents":["ta",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"ra"},{"tag":"TypeVar","contents":"ta"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"rb"},{"tag":"TypeVar","contents":"tb"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"ZipRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"ta"},{"tag":"TypeVar","contents":"ra"},{"tag":"TypeVar","contents":"tb"},{"tag":"TypeVar","contents":"rb"},{"tag":"REmpty","contents":{}},{"tag":"TypeVar","contents":"rc"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ra"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"rb"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"rc"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2403,1],"name":".spago/option/v6.0.1/src/Option.purs","end":[2409,25]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"get","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["value",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["option'",{"tag":"ForAll","contents":["option",{"tag":"ForAll","contents":["label",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value"},{"tag":"TypeVar","contents":"option'"},{"tag":"TypeVar","contents":"option"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"value"}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempts to fetch the value at the given key from an option.\n\nIf the key exists in the option, `Just _` is returned.\n\nIf the key does not exist in the option, `Nothing` is returned.\n\nE.g.\n```PureScript\nsomeOption :: Option.Option ( foo :: Boolean, bar :: Int )\nsomeOption = Option.insert (Data.Symbol.SProxy :: _ \"bar\") 31 Option.empty\n\nbar :: Data.Maybe.Maybe Int\nbar = Option.get (Data.Symbol.SProxy :: _ \"bar\") someOption\n```\n\nThe `proxy` can be anything so long as its type variable has kind `Symbol`.\n\nIt will commonly be `Data.Symbol.SProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2309,1],"name":".spago/option/v6.0.1/src/Option.purs","end":[2316,16]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"delete","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["value",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["option'",{"tag":"ForAll","contents":["option",{"tag":"ForAll","contents":["label",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value"},{"tag":"TypeVar","contents":"option"},{"tag":"TypeVar","contents":"option'"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"option"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Removes a key from an option\n\n```PureScript\nsomeOption :: Option.Option ( foo :: Boolean, bar :: Int )\nsomeOption = Option.fromRecord { foo: true, bar: 31 }\n\nanotherOption :: Option.Option ( bar :: Int )\nanotherOption = Option.delete (Data.Symbol.SProxy :: _ \"foo\") someOption\n```\n\nThe `proxy` can be anything so long as its type variable has kind `Symbol`.\n\nIt will commonly be `Data.Symbol.SProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/variant/v6.0.1/src/Data/Variant.purs","end":[71,8]},"score":12,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"prj","moduleName":"Data.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["sym",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to read a variant at a given label.\n```purescript\ncase prj (SProxy :: SProxy \"foo\") intAtFoo of\n  Just i  -> i + 1\n  Nothing -> 0\n```\n"}],"tag":"SearchResult"}]