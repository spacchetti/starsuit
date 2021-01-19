// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["891107462"] = [{"values":[{"sourceSpan":{"start":[134,3],"name":".spago/untagged-union/v0.2.0/src/Untagged/Union.purs","end":[134,24]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"reduce","moduleName":"Untagged.Union","info":{"values":[{"typeClassArguments":[["f",null],["i",null],["o",null]],"typeClass":[["Untagged","Union"],"Reducible"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["o",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","Union"],"Reducible"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":".spago/httpure/v0.10.0/src/HTTPure/Lookup.purs","end":[55,67]},"score":1,"packageInfo":{"values":["httpure"],"tag":"Package"},"name":"at","moduleName":"HTTPure.Lookup","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["HTTPure","Lookup"],"Lookup"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"k"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"r"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"This simple helper works on any `Lookup` instance where the return type is\na `Monoid`, and is the same as `lookup` except that it returns a `t`\ninstead of a `Maybe t`. If `lookup` would return `Nothing`, then `at`\nreturns `mempty`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,3],"name":".spago/heterogeneous/v0.4.1/src/Heterogeneous/Mapping.purs","end":[42,31]},"score":1,"packageInfo":{"values":["heterogeneous"],"tag":"Package"},"name":"hmapWithIndex","moduleName":"Heterogeneous.Mapping","info":{"values":[{"typeClassArguments":[["f",null],["a",null],["b",null]],"typeClass":[["Heterogeneous","Mapping"],"HMapWithIndex"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMapWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,3],"name":".spago/heterogeneous/v0.4.1/src/Heterogeneous/Mapping.purs","end":[39,22]},"score":1,"packageInfo":{"values":["heterogeneous"],"tag":"Package"},"name":"hmap","moduleName":"Heterogeneous.Mapping","info":{"values":[{"typeClassArguments":[["f",null],["a",null],["b",null]],"typeClass":[["Heterogeneous","Mapping"],"HMap"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[22,3],"name":".spago/heterogeneous/v0.4.1/src/Heterogeneous/Mapping.purs","end":[22,25]},"score":1,"packageInfo":{"values":["heterogeneous"],"tag":"Package"},"name":"mapping","moduleName":"Heterogeneous.Mapping","info":{"values":[{"typeClassArguments":[["f",null],["a",null],["b",null]],"typeClass":[["Heterogeneous","Mapping"],"Mapping"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"Mapping"],"constraintArgs":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[25,3],"name":".spago/graphql-client/v0.2.0/src/GraphQL/Client/QueryReturns.purs","end":[25,49]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"queryReturnsImpl","moduleName":"GraphQL.Client.QueryReturns","info":{"values":[{"typeClassArguments":[["schema",null],["query",null],["returns",null]],"typeClass":[["GraphQL","Client","QueryReturns"],"QueryReturns"],"type":{"tag":"ForAll","contents":["schema",{"tag":"ForAll","contents":["query",{"tag":"ForAll","contents":["returns",{"tag":"ConstrainedType","contents":[{"constraintClass":[["GraphQL","Client","QueryReturns"],"QueryReturns"],"constraintArgs":[{"tag":"TypeVar","contents":"schema"},{"tag":"TypeVar","contents":"query"},{"tag":"TypeVar","contents":"returns"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"schema"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"query"}]},{"tag":"TypeVar","contents":"returns"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Do not use this. Use `queryReturns` instead. Only exported due to compiler restrictions\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[56,70]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"putInsideMod","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToRegion"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"AsPosEndo"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"p"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Put a position inside a region by using the modulus operator\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[51,75]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"outside","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToRegion"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToPos"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`inside`, but with its result negated.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/polymorphic-vectors/v2.0.1/src/Data/Vector/Polymorphic.purs","end":[40,75]},"score":2,"packageInfo":{"values":["polymorphic-vectors"],"tag":"Package"},"name":"inside","moduleName":"Data.Vector.Polymorphic","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToRegion"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"r"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Vector","Polymorphic","Class"],"ToPos"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semiring"],"Semiring"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Checks if a position is inside a region. Size of the region should be\npositive. Inclusive on the lower bound, exclusive on the higher bound.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[378,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[378,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"gcd","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"GCD"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[366,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[366,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"min","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Min"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[360,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[360,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"max","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Max"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[176,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[176,50]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"trich","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Trich"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[114,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[114,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"mod","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Mod"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[108,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[108,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"div","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Div"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[88,46]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"mul","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Mul"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[69,48]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"sub","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Sub"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[62,48]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"add","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["z",{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"Add"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"y"},{"tag":"TypeVar","contents":"z"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"z"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[142,53]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"eq","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b3",{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"},{"tag":"TypeVar","contents":"b3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeVar","contents":"b3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[129,55]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"imp","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b3",{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Imp"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"},{"tag":"TypeVar","contents":"b3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeVar","contents":"b3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[116,55]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"xor","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b3",{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Xor"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"},{"tag":"TypeVar","contents":"b3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeVar","contents":"b3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[102,53]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"or","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b3",{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"Or"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"},{"tag":"TypeVar","contents":"b3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeVar","contents":"b3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[88,55]},"score":7,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"and","moduleName":"Data.Typelevel.Bool","info":{"values":[{"type":{"tag":"ForAll","contents":["b3",{"tag":"ForAll","contents":["b2",{"tag":"ForAll","contents":["b1",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"And"],"constraintArgs":[{"tag":"TypeVar","contents":"b1"},{"tag":"TypeVar","contents":"b2"},{"tag":"TypeVar","contents":"b3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b1"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b2"}]},{"tag":"TypeVar","contents":"b3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]