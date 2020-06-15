// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["537661877"] = [{"values":[{"sourceSpan":{"start":[163,1],"name":".spago/run/v3.0.1/src/Run.purs","end":[167,13]},"score":0,"packageName":"run","name":"expand","moduleName":"Run","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rx",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"rx"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Casts some set of effects to a wider set of effects via a left-biased\nunion. For example, you could take a closed effect and unify it with\na superset of effects because we know the additional effects never\noccur.\n\n```purescript\ntype LessRows = (foo :: FOO)\ntype MoreRows = (foo :: FOO, bar :: BAR, baz :: BAZ)\n\nfoo :: Run LessRows Unit\nfoo = foo\n\nfoo' :: Run MoreRows Unit\nfoo' = expand foo\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/run/v3.0.1/src/Run/Internal.purs","end":[38,11]},"score":0,"packageName":"run","name":"fromRows","moduleName":"Run.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","Row"],"RProxy"]},{"tag":"TypeVar","contents":"r1"}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","Row"],"RProxy"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/run/v3.0.1/src/Run/Internal.purs","end":[31,11]},"score":0,"packageName":"run","name":"toRows","moduleName":"Run.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","Row"],"RProxy"]},{"tag":"TypeVar","contents":"r1"}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Data","Row"],"RProxy"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[141,1],"name":".spago/halogen/v5.0.1/src/Halogen/HTML/Properties.purs","end":[141,66]},"score":0,"packageName":"halogen","name":"expand","moduleName":"Halogen.HTML.Properties","info":{"values":[{"type":{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["gt",{"tag":"ForAll","contents":["lt",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"lt"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"gt"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"TypeVar","contents":"lt"}]},{"tag":"TypeVar","contents":"i"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","HTML","Properties"],"IProp"]},{"tag":"TypeVar","contents":"gt"}]},{"tag":"TypeVar","contents":"i"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Every `IProp lt i` can be cast to some `IProp gt i` as long as `lt` is a\nsubset of `gt`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[87,1],"name":".spago/halogen-formless/v1.0.0-rc.2/src/Formless/Internal/Transform.purs","end":[94,27]},"score":0,"packageName":"halogen-formless","name":"inputFieldsToFormFields","moduleName":"Formless.Internal.Transform","info":{"values":[{"type":{"tag":"ForAll","contents":["fs",{"tag":"ForAll","contents":["is",{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["ixs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"is"},{"tag":"TypeVar","contents":"ixs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"InputFieldsToFormFields"],"constraintArgs":[{"tag":"TypeVar","contents":"ixs"},{"tag":"TypeVar","contents":"is"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"fs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that will automatically transform a record of FormSpec(s) into\na record of FormField(s).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/halogen-formless/v1.0.0-rc.2/src/Formless/Internal/Transform.purs","end":[81,28]},"score":0,"packageName":"halogen-formless","name":"formFieldsToInputFields","moduleName":"Formless.Internal.Transform","info":{"values":[{"type":{"tag":"ForAll","contents":["is",{"tag":"ForAll","contents":["fs",{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["fxs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fxs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"FormFieldsToInputFields"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"is"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"fs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function that will automatically transform a record of FormField(s) into\njust the input value\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[281,1],"name":".spago/sized-vectors/v5.0.0/src/Data/Vec.purs","end":[281,85]},"score":0,"packageName":"sized-vectors","name":"drop'","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s2",{"tag":"ForAll","contents":["s1",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"LtEq"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Sub"],"constraintArgs":[{"tag":"TypeVar","contents":"s1"},{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s2"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[257,1],"name":".spago/variant/v6.0.1/src/Data/Functor/Variant.purs","end":[261,18]},"score":0,"packageName":"variant","name":"expand","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["gt",{"tag":"ForAll","contents":["mix",{"tag":"ForAll","contents":["lt",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"lt"},{"tag":"TypeVar","contents":"mix"},{"tag":"TypeVar","contents":"gt"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"lt"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"gt"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Every `VariantF lt a` can be cast to some `VariantF gt a` as long as `lt` is a\nsubset of `gt`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[25,1],"name":".spago/subcategory/v0.2.0/src/Restrictable.purs","end":[31,14]},"score":0,"packageName":"subcategory","name":"restrict","moduleName":"Control.Subcategory.Restrictable","info":{"values":[{"type":{"tag":"ForAll","contents":["v1",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["c1",{"tag":"ForAll","contents":["c0",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c1"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c1"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Restrictable"],"Restrictable"],"constraintArgs":[{"tag":"TypeVar","contents":"c0"},{"tag":"TypeVar","contents":"c1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c0"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c1"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/subcategory/v0.2.0/src/Symmetric.purs","end":[15,77]},"score":0,"packageName":"subcategory","name":"swap","moduleName":"Control.Subcategory.Relation.Symmetric","info":{"values":[{"typeClassArguments":[["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}],["p",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}]],"typeClass":[["Control","Subcategory","Relation","Symmetric"],"Symmetric"],"type":{"tag":"ForAll","contents":["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["p",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["v1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Relation","Symmetric"],"Symmetric"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"TypeVar","contents":"v0"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/subcategory/v0.2.0/src/Profunctor/HasDimap.purs","end":[80,13]},"score":0,"packageName":"subcategory","name":"throughUnit","moduleName":"Control.Subcategory.Profunctor.HasDimap","info":{"values":[{"type":{"tag":"ForAll","contents":["v1",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["u",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Profunctor","HasDimap"],"HasDimap"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasIdentity"],"HasIdentity"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasTerminate"],"HasTerminate"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/subcategory/v0.2.0/src/Profunctor/HasDimap.purs","end":[45,13]},"score":0,"packageName":"subcategory","name":"arr","moduleName":"Control.Subcategory.Profunctor.HasDimap","info":{"values":[{"type":{"tag":"ForAll","contents":["v1",{"tag":"ForAll","contents":["v0",{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Profunctor","HasDimap"],"HasDimap"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasIdentity"],"HasIdentity"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Relation","Reflexive"],"Reflexive"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v0"}]},{"tag":"TypeVar","contents":"v1"}]}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]