// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["322470487"] = [{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/record/v3.0.0/src/Record.purs","end":[82,15]},"score":30,"packageInfo":{"values":["record"],"tag":"Package"},"name":"modify","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"l"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Modify a property for a label which is specified using a value-level proxy for\na type-level string.\n\nFor example:\n\n```purescript\nmodify (Proxy :: Proxy \"x\")\n  :: forall r a b. (a -> b) -> { x :: a | r } -> { x :: b | r }\n```\n"}],"tag":"SearchResult"}]