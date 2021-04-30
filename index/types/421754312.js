// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["421754312"] = [{"values":[{"sourceSpan":{"start":[238,1],"name":".spago/variant/v7.0.2/src/Data/Functor/Variant.purs","end":[245,6]},"score":10,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"match","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Variant","Internal"],"VariantFMatchCases"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"REmpty","contents":{}},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combinator for exhaustive pattern matching using an `onMatch` case record.\n```purescript\nmatchFn :: VariantF (foo :: Maybe, bar :: Tuple String, baz :: Either String) Int -> String\nmatchFn = match\n { foo: \\foo -> \"Foo: \" <> maybe \"nothing\" show foo\n , bar: \\bar -> \"Bar: \" <> show (snd bar)\n , baz: \\baz -> \"Baz: \" <> either id show baz\n }\n```\n"}],"tag":"SearchResult"}]