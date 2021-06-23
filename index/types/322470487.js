// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["322470487"] = [{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/record/v3.0.0/src/Record.purs","end":[82,15]},"score":32,"packageInfo":{"values":["record"],"tag":"Package"},"name":"modify","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"l"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Modify a property for a label which is specified using a value-level proxy for\na type-level string.\n\nFor example:\n\n```purescript\nmodify (Proxy :: Proxy \"x\")\n  :: forall r a b. (a -> b) -> { x :: a | r } -> { x :: b | r }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2855,1],"name":".spago/option/v9.0.0/src/Option.purs","end":[2863,16]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"modify","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["label",{"tag":"ForAll","contents":["option",{"tag":"ForAll","contents":["option'",{"tag":"ForAll","contents":["option''",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["value",{"tag":"ForAll","contents":["value'",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"label"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value'"},{"tag":"TypeVar","contents":"option''"},{"tag":"TypeVar","contents":"option'"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"label"},{"tag":"TypeVar","contents":"value"},{"tag":"TypeVar","contents":"option''"},{"tag":"TypeVar","contents":"option"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"label"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"value'"}]},{"tag":"TypeVar","contents":"value"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Manipulates the value of a key in an option.\n\nIf the field exists in the option, the given function is applied to the value.\n\nIf the field does not exist in the option, there is no change to the option.\n\nE.g.\n```PureScript\nsomeOption :: Option.Option ( foo :: Boolean, bar :: Int )\nsomeOption = Option.insert (Data.Symbol.SProxy :: _ \"bar\") 31 Option.empty\n\nanotherOption :: Option.Option ( foo :: Boolean, bar :: Int )\nanotherOption = Option.modify (Data.Symbol.SProxy :: _ \"bar\") (_ + 1) someOption\n```\n\nThe `proxy` can be anything so long as its type variable has kind `Symbol`.\n\nIt will commonly be `Data.Symbol.SProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"}]