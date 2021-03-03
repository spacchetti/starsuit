// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1791115987"] = [{"values":[{"sourceSpan":{"start":[149,1],"name":".spago/variant/v7.0.1/src/Data/Functor/Variant.purs","end":[156,12]},"score":1,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"prj","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["g",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to read a variant at a given label.\n```purescript\ncase prj (Proxy :: Proxy \"foo\") maybeAtFoo of\n  Just (Just i) -> i + 1\n  _ -> 0\n```\n"}],"tag":"SearchResult"}]