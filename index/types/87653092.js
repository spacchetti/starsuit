// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["87653092"] = [{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/prelude/v5.0.0/src/Record/Unsafe.purs","end":[15,64]},"score":177,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"unsafeGet","moduleName":"Record.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely gets a value from a record, using a string for the key.\n\nIf the key does not exist this will cause a runtime error elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[161,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Semigroup/Foldable.purs","end":[161,71]},"score":54,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"intercalate","moduleName":"Data.Semigroup.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeVar","contents":"m"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure using a `Semigroup` instance,\ncombining adjacent elements using the specified separator.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[390,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[390,65]},"score":54,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"notElem","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a value is not an element of a data structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[386,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[386,62]},"score":54,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"elem","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a value is an element of a data structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[352,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[352,67]},"score":54,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"surround","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeVar","contents":"m"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`fold` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surround \"*\" []\n= \"*\"\n\n> surround \"*\" [\"1\"]\n= \"*1*\"\n\n> surround \"*\" [\"1\", \"2\"]\n= \"*1*2*\"\n\n> surround \"*\" [\"1\", \"2\", \"3\"]\n= \"*1*2*3*\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[308,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[308,67]},"score":54,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"intercalate","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeVar","contents":"m"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fold a data structure, accumulating values in some `Monoid`,\ncombining adjacent elements using the specified separator.\n\nFor example:\n\n```purescript\n> intercalate \", \" [\"Lorem\", \"ipsum\", \"dolor\"]\n= \"Lorem, ipsum, dolor\"\n\n> intercalate \"*\" [\"a\", \"b\", \"c\"]\n= \"a*b*c\"\n\n> intercalate [1] [[2, 3], [4, 5], [6, 7]]\n= [2, 3, 1, 4, 5, 1, 6, 7]\n```\n"}],"tag":"SearchResult"}]