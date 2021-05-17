// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["408579158"] = [{"values":[{"sourceSpan":{"start":[114,5],"name":".spago/pipes/v7.0.1/src/Pipes/ListT.purs","end":[114,57]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"toListT","moduleName":"Pipes.ListT","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Pipes","ListT"],"Enumerable"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pipes","ListT"],"Enumerable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","ListT"],"ListT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/halogen-formless/v2.0.1/src/Formless/Internal/Transform.purs","end":[69,27]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"setFormFieldsTouched","moduleName":"Formless.Internal.Transform","info":{"values":[{"type":{"tag":"ForAll","contents":["fxs",{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["fs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fxs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"SetFormFieldsTouched"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"fs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that will automatically transform a record of FormField(s) into\njust the input value\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[272,1],"name":".spago/sized-vectors/v5.0.2/src/Data/Vec.purs","end":[272,63]},"score":1,"packageInfo":{"values":["sized-vectors"],"tag":"Package"},"name":"take'","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"LtEq"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[250,1],"name":".spago/sized-vectors/v5.0.2/src/Data/Vec.purs","end":[250,59]},"score":1,"packageInfo":{"values":["sized-vectors"],"tag":"Package"},"name":"init","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["s1",{"tag":"ForAll","contents":["s2",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Pred"],"constraintArgs":[{"tag":"TypeVar","contents":"s1"},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get all but the last element of a non-empty vector.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[246,1],"name":".spago/sized-vectors/v5.0.2/src/Data/Vec.purs","end":[246,59]},"score":1,"packageInfo":{"values":["sized-vectors"],"tag":"Package"},"name":"tail","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["s1",{"tag":"ForAll","contents":["s2",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Pred"],"constraintArgs":[{"tag":"TypeVar","contents":"s1"},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the tail of a non-empty vector.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/profunctor/v5.0.0/src/Data/Profunctor.purs","end":[37,73]},"score":17,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"unwrapIso","moduleName":"Data.Profunctor","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor"],"Profunctor"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/subcategory/v0.2.0/src/Profunctor/HasDimap.purs","end":[90,13]},"score":0,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"unwrapIso","moduleName":"Control.Subcategory.Profunctor.HasDimap","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["v1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Profunctor","HasDimap"],"HasDimap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"v0"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v0"}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]