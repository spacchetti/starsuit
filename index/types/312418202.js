// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["312418202"] = [{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/matryoshka/v0.4.0/src/Matryoshka/Unfold.purs","end":[34,55]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"ana","moduleName":"Matryoshka.Unfold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Matryoshka","Class","Corecursive"],"Corecursive"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matryoshka","Coalgebra"],"Coalgebra"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"t"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/matryoshka/v0.4.0/src/Matryoshka/Fold.purs","end":[40,52]},"score":0,"packageInfo":{"values":["matryoshka"],"tag":"Package"},"name":"cata","moduleName":"Matryoshka.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Matryoshka","Class","Recursive"],"Recursive"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Matryoshka","Algebra"],"Algebra"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[206,1],"name":".spago/sized-vectors/v5.0.1/src/Data/Vec.purs","end":[206,60]},"score":5,"packageInfo":{"values":["sized-vectors"],"tag":"Package"},"name":"index","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"i"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Lt"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the element at a given index inside a vector. Index out of bounds errors\nare caught at compile time.\n\nExample:\n\n    myVector = 1 +> 2 +> 3 +> 4 +> empty\n    value = index myVector d2\n    -- value == 3\n    value = index myVector d4\n    -- out of bounds so does not type check\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/subcategory/v0.2.0/src/Slackable.purs","end":[30,8]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"slacken","moduleName":"Control.Subcategory.Slackable","info":{"values":[{"type":{"tag":"ForAll","contents":["v1",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Slackable"],"Slackable"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]