// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1125285739"] = [{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/halogen-formless/v2.0.1/src/Formless/Transform/Record.purs","end":[57,31]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"wrapInputFunctions","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["ifs",{"tag":"ForAll","contents":["ifs'",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs'"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"WrapField"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provided a record, where each field in the record contains\na function from `input -> input`, wraps each function in\nthe InputField type for compatibility with Formless\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,1],"name":".spago/halogen-formless/v2.0.1/src/Formless/Transform/Record.purs","end":[46,28]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"wrapInputFields","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["is",{"tag":"ForAll","contents":["is'",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is'"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"WrapField"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provided a record, where each field in the record contains\na value of type `input`, wraps each value in the InputField\ntype for compatibility with Formless\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[584,1],"name":".spago/ordered-collections/v2.0.1/src/Data/Map/Internal.purs","end":[584,88]},"score":24,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"fromFoldableWithIndex","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert any indexed foldable collection into a map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/homogeneous/v0.3.0/src/Data/Homogeneous/Variant.purs","end":[34,83]},"score":0,"packageInfo":{"values":["homogeneous"],"tag":"Package"},"name":"homogeneous'","moduleName":"Data.Homogeneous.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["ra",{"tag":"ForAll","contents":["ls",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Homogeneous"],"ToHomogeneousRow"],"constraintArgs":[{"tag":"TypeVar","contents":"ls"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"ra"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"ra"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Homogeneous","Variant"],"Homogeneous"]},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"When you have labels `Row` and `a` at hand and want to derive the `Row` itself\nyou can use this constructor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/homogeneous/v0.3.0/src/Data/Homogeneous/Variant.purs","end":[29,86]},"score":0,"packageInfo":{"values":["homogeneous"],"tag":"Package"},"name":"homogeneous","moduleName":"Data.Homogeneous.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["ra",{"tag":"ForAll","contents":["ls",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Homogeneous"],"HomogeneousRowLabels"],"constraintArgs":[{"tag":"TypeVar","contents":"ra"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"ra"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Homogeneous","Variant"],"Homogeneous"]},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/homogeneous/v0.3.0/src/Data/Homogeneous/Record.purs","end":[56,82]},"score":0,"packageInfo":{"values":["homogeneous"],"tag":"Package"},"name":"homogeneous'","moduleName":"Data.Homogeneous.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["ra",{"tag":"ForAll","contents":["ls",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Homogeneous"],"ToHomogeneousRow"],"constraintArgs":[{"tag":"TypeVar","contents":"ls"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"ra"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ra"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Homogeneous","Record"],"Homogeneous"]},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"When you already have `Row` of labels and `a` at hand and want to derive row\nfrom them you can use this constructor instead.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/homogeneous/v0.3.0/src/Data/Homogeneous/Record.purs","end":[47,19]},"score":0,"packageInfo":{"values":["homogeneous"],"tag":"Package"},"name":"homogeneous","moduleName":"Data.Homogeneous.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["ra",{"tag":"ForAll","contents":["ls",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Homogeneous"],"HomogeneousRowLabels"],"constraintArgs":[{"tag":"TypeVar","contents":"ra"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ra"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Homogeneous","Record"],"Homogeneous"]},{"tag":"TypeVar","contents":"ls"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The \"usual\" constructor when\n`ra` `Row` is known and you\nwant to derive `sl` and `a`\nfrom it.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[246,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashMap.purs","end":[246,97]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"fromFoldableWithIndex","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Turn a foldable functor with index into a hash map.\n\nThis can be used to convert, for example, an ordered map into a\nhash map with the same keys and values, or an array into a hash\nmap with values indexed by their position in the array.\n\n```PureScript\nfromFoldableWithIndex [\"a\", \"b\"] == fromArray [Tuple 0 \"a\", Tuple 1 \"b\"]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/subcategory/v0.2.0/src/Relation/Reflexive.purs","end":[15,58]},"score":0,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"reflect'","moduleName":"Control.Subcategory.Relation.Reflexive","info":{"values":[{"typeClassArguments":[["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]}],["p",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]}]],"typeClass":[["Control","Subcategory","Relation","Reflexive"],"Reflexive"],"type":{"tag":"ForAll","contents":["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["p",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Relation","Reflexive"],"Reflexive"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,7],"name":".spago/subcategory/v0.2.0/src/HasTerminate.purs","end":[21,80]},"score":0,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"terminate'","moduleName":"Control.Subcategory.HasTerminate","info":{"values":[{"typeClassArguments":[["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]}],["u",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Control","Subcategory","HasTerminate"],"HasTerminate"],"type":{"tag":"ForAll","contents":["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["u",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasTerminate"],"HasTerminate"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"u"}]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,7],"name":".spago/subcategory/v0.2.0/src/HasIntroduce.purs","end":[21,80]},"score":0,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"introduce'","moduleName":"Control.Subcategory.HasIntroduce","info":{"values":[{"typeClassArguments":[["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]}],["s",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Control","Subcategory","HasIntroduce"],"HasIntroduce"],"type":{"tag":"ForAll","contents":["c",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["s",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasIntroduce"],"HasIntroduce"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,3],"name":".spago/transformers/v5.1.0/src/Control/Monad/Trans/Class.purs","end":[23,46]},"score":47,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"lift","moduleName":"Control.Monad.Trans.Class","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Control","Monad","Trans","Class"],"MonadTrans"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Trans","Class"],"MonadTrans"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]