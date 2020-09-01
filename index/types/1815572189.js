// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1815572189"] = [{"values":[{"sourceSpan":{"start":[139,1],"name":".spago/record/v2.0.2/src/Record.purs","end":[149,19]},"score":33,"packageInfo":{"values":["record"],"tag":"Package"},"name":"rename","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["inter",{"tag":"ForAll","contents":["input",{"tag":"ForAll","contents":["ty",{"tag":"ForAll","contents":["next",{"tag":"ForAll","contents":["prev",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"prev"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"next"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"prev"},{"tag":"TypeVar","contents":"ty"},{"tag":"TypeVar","contents":"inter"},{"tag":"TypeVar","contents":"input"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeVar","contents":"prev"},{"tag":"TypeVar","contents":"inter"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"next"},{"tag":"TypeVar","contents":"ty"},{"tag":"TypeVar","contents":"inter"},{"tag":"TypeVar","contents":"output"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeVar","contents":"next"},{"tag":"TypeVar","contents":"inter"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"prev"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"next"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"input"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"output"}]}]}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Rename a property for a label which is specified using a value-level proxy for\na type-level string.\n\nNote that the type of the resulting row must _lack_ the specified property.\nSince duplicate labels are allowed, this is checked with a type class constraint.\n\nFor example:\n\n```purescript\nrename (SProxy :: SProxy \"x\") (SProxy :: SProxy \"y\")\n  :: forall a r. Lacks \"x\" r => Lacks \"y\" r => { x :: a | r} -> { y :: a | r}\n```\n"}],"tag":"SearchResult"}]