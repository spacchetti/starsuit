// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1069326838"] = [{"values":[{"sourceSpan":{"start":[22,3],"name":".spago/type-equality/v4.0.0/src/Type/Equality.purs","end":[22,32]},"score":7,"packageInfo":{"values":["type-equality"],"tag":"Package"},"name":"proof","moduleName":"Type.Equality","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Type","Equality"],"TypeEquals"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Equality"],"TypeEquals"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/typelevel-prelude/v6.0.0/src/Type/Data/Ordering.purs","end":[58,61]},"score":24,"packageInfo":{"values":["typelevel-prelude"],"tag":"Package"},"name":"invert","moduleName":"Type.Data.Ordering","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["o",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","Ordering"],"Invert"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"i"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"o"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[135,3],"name":".spago/typelevel-lists/v2.0.1/src/Type/Data/List.purs","end":[135,46]},"score":0,"packageInfo":{"values":["typelevel-lists"],"tag":"Package"},"name":"last","moduleName":"Type.Data.List","info":{"values":[{"typeClassArguments":[["xs",null],["x",null]],"typeClass":[["Type","Data","List"],"Last"],"type":{"tag":"ForAll","contents":["xs",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["lproxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","List"],"Last"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"lproxy"},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"x"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,3],"name":".spago/typelevel-lists/v2.0.1/src/Type/Data/List.purs","end":[123,48]},"score":0,"packageInfo":{"values":["typelevel-lists"],"tag":"Package"},"name":"init","moduleName":"Type.Data.List","info":{"values":[{"typeClassArguments":[["xs",null],["ys",null]],"typeClass":[["Type","Data","List"],"Init"],"type":{"tag":"ForAll","contents":["xs",{"tag":"ForAll","contents":["ys",{"tag":"ForAll","contents":["lproxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","List"],"Init"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"ys"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"lproxy"},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"lproxy"},{"tag":"TypeVar","contents":"ys"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/typelevel-prelude/v6.0.0/src/Type/Data/Boolean.purs","end":[62,55]},"score":24,"packageInfo":{"values":["typelevel-prelude"],"tag":"Package"},"name":"not","moduleName":"Type.Data.Boolean","info":{"values":[{"type":{"tag":"ForAll","contents":["proxy",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["o",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Data","Boolean"],"Not"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"i"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"o"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/simple-i18n/v1.0.0/src/Simple/I18n/Translation.purs","end":[39,14]},"score":0,"packageInfo":{"values":["simple-i18n"],"tag":"Package"},"name":"toRecord","moduleName":"Simple.I18n.Translation","info":{"values":[{"type":{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["xs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","RowList"],"ListToRow"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"SListToRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Row","Homogeneous"],"Homogeneous"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Simple","I18n","Translation"],"Translation"]},{"tag":"TypeVar","contents":"xs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/simple-i18n/v1.0.0/src/Simple/I18n/Translation.purs","end":[30,20]},"score":0,"packageInfo":{"values":["simple-i18n"],"tag":"Package"},"name":"fromRecord","moduleName":"Simple.I18n.Translation","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["xs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"SListToRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Type","Row","Homogeneous"],"Homogeneous"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Simple","I18n","Translation"],"Translation"]},{"tag":"TypeVar","contents":"xs"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a `Translation` from a homogeneous record with `String` fields.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/routing-duplex/v0.5.0/src/Routing/Duplex/Generic.purs","end":[17,17]},"score":0,"packageInfo":{"values":["routing-duplex"],"tag":"Package"},"name":"sum","moduleName":"Routing.Duplex.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Routing","Duplex","Generic"],"GRouteDuplex"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex'"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/record-extra-srghma/v0.1.0/src/Record/ExtraSrghma/Keys.purs","end":[56,17]},"score":0,"packageInfo":{"values":["record-extra-srghma"],"tag":"Package"},"name":"slistKeys","moduleName":"Record.ExtraSrghma.Keys","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["tuples",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","ExtraSrghma","CompareRecord"],"SListToRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"tuples"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","ExtraSrghma","Keys"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"tuples"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/record-extra-srghma/v0.1.0/src/Record/ExtraSrghma/Keys.purs","end":[37,17]},"score":0,"packageInfo":{"values":["record-extra-srghma"],"tag":"Package"},"name":"keys","moduleName":"Record.ExtraSrghma.Keys","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["row",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","ExtraSrghma","Keys"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":".spago/record-extra/v4.0.0/src/Record/Extra.purs","end":[146,17]},"score":1,"packageInfo":{"values":["record-extra"],"tag":"Package"},"name":"slistKeys","moduleName":"Record.Extra","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["tuples",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"SListToRowList"],"constraintArgs":[{"tag":"TypeVar","contents":"tuples"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"tuples"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/record-extra/v4.0.0/src/Record/Extra.purs","end":[127,17]},"score":1,"packageInfo":{"values":["record-extra"],"tag":"Package"},"name":"keys","moduleName":"Record.Extra","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["row",{"tag":"ForAll","contents":["rl",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Record","Extra"],"Keys"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[99,3],"name":".spago/pathy/v8.0.0/src/Pathy/Name.purs","end":[99,53]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"reflectName","moduleName":"Pathy.Name","info":{"values":[{"typeClassArguments":[["sym",null]],"typeClass":[["Pathy","Name"],"IsName"],"type":{"tag":"ForAll","contents":["sym",{"tag":"ForAll","contents":["d",{"tag":"ForAll","contents":["proxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Name"],"IsName"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Name"],"Name"]},{"tag":"TypeVar","contents":"d"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[14,1],"name":".spago/justifill/v0.2.1/src/Justifill.purs","end":[18,25]},"score":1,"packageInfo":{"values":["justifill"],"tag":"Package"},"name":"justifill","moduleName":"Justifill","info":{"values":[{"type":{"tag":"ForAll","contents":["from",{"tag":"ForAll","contents":["via",{"tag":"ForAll","contents":["to",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Justifill","Fillable"],"Fillable"],"constraintArgs":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"via"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"to"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Justifill","Justifiable"],"Justifiable"],"constraintArgs":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"from"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"via"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"from"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"to"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Completes records by wrapping provided optional keys in `Just`\nand filling out non-provided keys with `Nothing`s\nExample:\nx :: { name :: Maybe String, age :: Maybe Int, id :: Int }\nx = justifill { name: \"Mark\", id: 12 }\n-- { name: Just \"Mark\", age: Nothing, id: 12 }\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[177,1],"name":".spago/variant/v7.0.2/src/Data/Variant.purs","end":[181,15]},"score":10,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"expand","moduleName":"Data.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["lt",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["gt",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"lt"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"gt"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"lt"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"gt"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Every `Variant lt` can be cast to some `Variant gt` as long as `lt` is a\nsubset of `gt`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[11,3],"name":".spago/functors/v4.1.1/src/Data/Functor/Coproduct/Inject.purs","end":[11,30]},"score":9,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"inj","moduleName":"Data.Functor.Coproduct.Inject","info":{"values":[{"typeClassArguments":[["f",null],["g",null]],"typeClass":[["Data","Functor","Coproduct","Inject"],"Inject"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Coproduct","Inject"],"Inject"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/contravariant/v5.0.0/src/Data/Functor/Contravariant.purs","end":[27,67]},"score":5,"packageInfo":{"values":["contravariant"],"tag":"Package"},"name":"coerce","moduleName":"Data.Functor.Contravariant","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Contravariant"],"Contravariant"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[143,1],"name":".spago/filterable/v4.0.1/src/Data/Filterable.purs","end":[144,13]},"score":1,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"cleared","moduleName":"Data.Filterable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Filterable"],"Filterable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Filter out all values.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":".spago/tailrec/v5.0.1/src/Control/Monad/Rec/Class.purs","end":[142,50]},"score":23,"packageInfo":{"values":["tailrec"],"tag":"Package"},"name":"forever","moduleName":"Control.Monad.Rec.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`forever` runs an action indefinitely, using the `MonadRec` instance to\nensure constant stack usage.\n\nFor example:\n\n```purescript\nmain = forever $ trace \"Hello, World!\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/gen/v3.0.0/src/Control/Monad/Gen.purs","end":[74,66]},"score":12,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"elements","moduleName":"Control.Monad.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs a value chosen from a selection with\nuniform probability.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,3],"name":".spago/fork/v5.0.0/src/Control/Monad/Fork/Class.purs","end":[30,24]},"score":2,"packageInfo":{"values":["fork"],"tag":"Package"},"name":"join","moduleName":"Control.Monad.Fork.Class","info":{"values":[{"typeClassArguments":[["f",null],["m",null]],"typeClass":[["Control","Monad","Fork","Class"],"MonadFork"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Fork","Class"],"MonadFork"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,3],"name":".spago/monad-control/v5.0.0/src/Control/Monad/Base.purs","end":[24,35]},"score":2,"packageInfo":{"values":["monad-control"],"tag":"Package"},"name":"liftBase","moduleName":"Control.Monad.Base","info":{"values":[{"typeClassArguments":[["b",null],["m",null]],"typeClass":[["Control","Monad","Base"],"MonadBase"],"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Base"],"MonadBase"],"constraintArgs":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]