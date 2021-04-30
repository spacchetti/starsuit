// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1180566549"] = [{"values":[{"sourceSpan":{"start":[342,1],"name":".spago/halogen-formless/v2.0.1/src/Formless/Component.purs","end":[369,48]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"handleQuery","moduleName":"Formless.Component","info":{"values":[{"type":{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["st",{"tag":"ForAll","contents":["query",{"tag":"ForAll","contents":["act",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["msg",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["is",{"tag":"ForAll","contents":["ixs",{"tag":"ForAll","contents":["ivs",{"tag":"ForAll","contents":["fs",{"tag":"ForAll","contents":["fxs",{"tag":"ForAll","contents":["us",{"tag":"ForAll","contents":["vs",{"tag":"ForAll","contents":["os",{"tag":"ForAll","contents":["ifs",{"tag":"ForAll","contents":["ivfs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Aff","Class"],"MonadAff"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"is"},{"tag":"TypeVar","contents":"ixs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fxs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"EqRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"ixs"},{"tag":"TypeVar","contents":"is"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"InputFieldsToFormFields"],"constraintArgs":[{"tag":"TypeVar","contents":"ixs"},{"tag":"TypeVar","contents":"is"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"FormFieldsToInputFields"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"is"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"CountErrors"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"AllTouched"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"SetFormFieldsTouched"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"ReplaceFormFieldInputs"],"constraintArgs":[{"tag":"TypeVar","contents":"is"},{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"ModifyAll"],"constraintArgs":[{"tag":"TypeVar","contents":"ifs"},{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"ValidateAll"],"constraintArgs":[{"tag":"TypeVar","contents":"vs"},{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Internal","Transform"],"FormFieldToMaybeOutput"],"constraintArgs":[{"tag":"TypeVar","contents":"fxs"},{"tag":"TypeVar","contents":"fs"},{"tag":"TypeVar","contents":"os"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"fs"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"OutputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"os"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Validation"],"Validation"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"m"}]}}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"vs"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"ivs"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"ivfs"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"U"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"us"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Lacks"],"constraintArgs":[{"tag":"TypeLevelString","contents":"internal"},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"query"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}}]}]},null]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"Event"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"Query"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"query"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Component"],"HalogenM"]},{"tag":"TypeVar","contents":"form"}]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"act"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]