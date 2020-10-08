// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["544072939"] = [{"values":[{"sourceSpan":{"start":[80,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Semigroup/Foldable.purs","end":[80,72]},"score":66,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequence1_","moduleName":"Data.Semigroup.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Perform all of the effects in some data structure in the order\ngiven by the `Foldable1` instance, ignoring the final result.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Foldable.purs","end":[234,62]},"score":66,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"oneOf","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Plus"],"Plus"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combines a collection of elements using the `Alt` operation.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[230,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Foldable.purs","end":[230,76]},"score":66,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"sequence_","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Perform all of the effects in some data structure in the order\ngiven by the `Foldable` instance, ignoring the final result.\n\nFor example:\n\n```purescript\nsequence_ [ trace \"Hello, \", trace \" world!\" ]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/subcategory/v0.2.0/src/Functor/HasBind.purs","end":[122,9]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"join","moduleName":"Control.Subcategory.Functor.HasBind","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Functor","HasBind"],"HasBind"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasIdentity"],"HasIdentity"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"v"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"v"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/gen/v2.1.1/src/Control/Monad/Gen.purs","end":[33,67]},"score":10,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"oneOf","moduleName":"Control.Monad.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs a value chosen from a selection of\nexisting generators with uniform probability.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[17,3],"name":".spago/free/v5.2.0/src/Control/Monad/Free/Class.purs","end":[17,39]},"score":14,"packageInfo":{"values":["free"],"tag":"Package"},"name":"wrapFree","moduleName":"Control.Monad.Free.Class","info":{"values":[{"typeClassArguments":[["f",null],["m",null]],"typeClass":[["Control","Monad","Free","Class"],"MonadFree"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Free","Class"],"MonadFree"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]