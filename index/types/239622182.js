// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["239622182"] = [{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix.purs","end":[181,79]},"score":0,"packageInfo":{"values":["sized-matrices"],"tag":"Package"},"name":"row","moduleName":"Data.Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["h",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"y"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Lt"],"constraintArgs":[{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"h"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"get vector for row\n\n```purescript\n> m\n  [1,2]\n  [0,5]\n> row m d1\n[0,5]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[166,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix.purs","end":[166,82]},"score":0,"packageInfo":{"values":["sized-matrices"],"tag":"Package"},"name":"column","moduleName":"Data.Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["h",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"x"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Lt"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"w"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"get vector for column\n\n```purescript\n> m\n  [1,2]\n  [0,5]\n> column m d1\n[2,5]\n```\n"}],"tag":"SearchResult"}]