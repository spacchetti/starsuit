// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["717101492"] = [{"values":[{"sourceSpan":{"start":[203,1],"name":".spago/elmish/v0.3.1/src/Elmish/Component.purs","end":[204,52]},"score":1,"packageInfo":{"values":["elmish"],"tag":"Package"},"name":"ComponentReturnCallback","moduleName":"Elmish.Component","info":{"values":[{"type":{"tag":"ForAll","contents":["msg",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Elmish","Component"],"ComponentDef"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeVar","contents":"a"}]},null]},null]},"arguments":[["m",null],["a",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A callback used to return multiple components of different types. See below\nfor more a detailed explanation.\n\nThis callback is handy in situations where a function must return different\ncomponents (with different `state` and `message` types) depending on\nparameters. The prime example of such situation is routing.\n\nBecause most routes are served by different UI components, with different\n`state` and `message` type parameters, the instantiating functions cannot\nhave the naive signature `route -> component`: they need to \"return\"\ndifferently-typed results depending on the route. In order to make that\nhappen, these functions instead take a polymorphic callback, to which they\npass the UI component. This type alias is the type of such callback: it\ntakes a polymorphically-typed UI component and returns \"some value\", a la\ncontinuation-passing style.\n\nEven though this type is rather trivial, it is included in the library for\nthe purpose of attaching this documentation to it.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix.purs","end":[116,44]},"score":0,"packageInfo":{"values":["sized-matrices"],"tag":"Package"},"name":"size","moduleName":"Data.Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"size of square matrix\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix/Algorithms.purs","end":[50,80]},"score":0,"packageInfo":{"values":["sized-matrices"],"tag":"Package"},"name":"det","moduleName":"Data.Matrix.Algorithms","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","CommutativeRing"],"CommutativeRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Pos"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"calculate the determinant for matrix.\n"}],"tag":"SearchResult"}]