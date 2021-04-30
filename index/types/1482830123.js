// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1482830123"] = [{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/typelevel-peano/v1.0.1/src/Type/Data/Peano/Nat/Parse.purs","end":[57,74]},"score":1,"packageInfo":{"values":["typelevel-peano"],"tag":"Package"},"name":"parseNat","moduleName":"Type.Data.Peano.Nat.Parse","info":{"values":[{"type":{"tag":"ForAll","contents":["sproxy",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","Peano","Nat","Parse"],"ParseNat"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"sproxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"value-level parse of number\n\n```purescript\nparseNat (Proxy  \"10\") ~> D10\nparseNat (SProxy \"10\") ~> D10\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/typelevel-peano/v1.0.1/src/Type/Data/Peano/Nat/Parse.purs","end":[15,64]},"score":1,"packageInfo":{"values":["typelevel-peano"],"tag":"Package"},"name":"length","moduleName":"Type.Data.Peano.Nat.Parse","info":{"values":[{"type":{"tag":"ForAll","contents":["sproxy",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","Peano","Nat","Parse"],"Length"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"sproxy"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/typelevel-peano/v1.0.1/src/Type/Data/Peano/Int/Parse.purs","end":[38,74]},"score":1,"packageInfo":{"values":["typelevel-peano"],"tag":"Package"},"name":"parseInt","moduleName":"Type.Data.Peano.Int.Parse","info":{"values":[{"type":{"tag":"ForAll","contents":["sproxy",{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","Peano","Int","Parse"],"ParseInt"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"sproxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"parse Int a Value-Level\n\n```purescript\nparseInt (Proxy  :: _ \"-1337\") ~> N1337\nparseInt (SProxy :: _ \"-1337\") ~> N1337\n\t-- N1137 would be type alias for Neg (Succ^1337 Z)\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[164,3],"name":".spago/typelevel-lists/v2.0.1/src/Type/Data/List.purs","end":[164,56]},"score":0,"packageInfo":{"values":["typelevel-lists"],"tag":"Package"},"name":"length","moduleName":"Type.Data.List","info":{"values":[{"typeClassArguments":[["xs",null],["r",null]],"typeClass":[["Type","Data","List"],"Length"],"type":{"tag":"ForAll","contents":["xs",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["iproxy",{"tag":"ForAll","contents":["lproxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","List"],"Length"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"lproxy"},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"iproxy"},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/record-extra-srghma/v0.1.0/src/Record/ExtraSrghma/ValuesToUnfoldableLazy.purs","end":[18,9]},"score":0,"packageInfo":{"values":["record-extra-srghma"],"tag":"Package"},"name":"valuesToUnfoldableLazy","moduleName":"Record.ExtraSrghma.ValuesToUnfoldableLazy","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["fields",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"fields"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","ExtraSrghma","FoldrValuesLazy"],"FoldrValuesLazy"],"constraintArgs":[{"tag":"TypeVar","contents":"fields"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"v"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/record-extra-srghma/v0.1.0/src/Record/ExtraSrghma/Keys.purs","end":[47,14]},"score":0,"packageInfo":{"values":["record-extra-srghma"],"tag":"Package"},"name":"pick","moduleName":"Record.ExtraSrghma.Keys","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["l",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","ExtraSrghma","Keys"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[132,1],"name":".spago/record-extra/v4.0.0/src/Record/Extra.purs","end":[137,14]},"score":1,"packageInfo":{"values":["record-extra"],"tag":"Package"},"name":"pick","moduleName":"Record.Extra","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["l",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"b"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/rave/v0.1.1/src/Rave.purs","end":[52,6]},"score":0,"packageInfo":{"values":["rave"],"tag":"Package"},"name":"throw","moduleName":"Rave","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Rave"],"VariantInjTagged"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Error","Class"],"MonadThrow"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"r2"}]}},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/halogen-formless/v2.0.1/src/Formless/Transform/Row.purs","end":[77,16]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"mkSProxies","moduleName":"Formless.Transform.Row","info":{"values":[{"type":{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["xs",{"tag":"ForAll","contents":["inputs",{"tag":"ForAll","contents":["row",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"inputs"},{"tag":"TypeVar","contents":"xs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"inputs"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Transform","Row"],"MakeSProxies"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"row"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"form"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"row"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A helper function to produce a record of SProxies given a form spec, to save\nyou the boilerplate of writing them all out.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,3],"name":".spago/prelude/v5.0.0/src/Data/Monoid.purs","end":[102,67]},"score":197,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"memptyRecord","moduleName":"Data.Monoid","info":{"values":[{"typeClassArguments":[["rowlist",null],["row",null],["subrow",null]],"typeClass":[["Data","Monoid"],"MonoidRecord"],"type":{"tag":"ForAll","contents":["rowlist",{"tag":"ForAll","contents":["row",{"tag":"ForAll","contents":["subrow",{"tag":"ForAll","contents":["rlproxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"MonoidRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"rowlist"},{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"subrow"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"rlproxy"},{"tag":"TypeVar","contents":"rowlist"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"subrow"}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[85,3],"name":".spago/fork/v5.0.0/src/Control/Monad/Fork/Class.purs","end":[85,35]},"score":2,"packageInfo":{"values":["fork"],"tag":"Package"},"name":"uninterruptible","moduleName":"Control.Monad.Fork.Class","info":{"values":[{"typeClassArguments":[["e",null],["f",null],["m",null]],"typeClass":[["Control","Monad","Fork","Class"],"MonadBracket"],"type":{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Fork","Class"],"MonadBracket"],"constraintArgs":[{"tag":"TypeVar","contents":"e"},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]