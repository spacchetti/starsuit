// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1911223999"] = [{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/identy/v2.2.0/src/Identy/ObjectMap.purs","end":[82,19]},"score":0,"packageInfo":{"values":["identy"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Identy.ObjectMap","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Identy","ObjectMap"],"ObjectMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[595,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Map/Internal.purs","end":[595,80]},"score":29,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"toUnfoldableUnordered","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a map to an unfoldable structure of key/value pairs\n\nWhile this traversal is up to 10% faster in benchmarks than `toUnfoldable`,\nit leaks the underlying map stucture, making it only suitable for applications\nwhere order is irrelevant.\n\nIf you are unsure, use `toUnfoldable`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[574,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Map/Internal.purs","end":[574,71]},"score":29,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a map to an unfoldable structure of key/value pairs where the keys are in ascending order\n"}],"tag":"SearchResult"}]