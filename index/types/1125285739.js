// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1125285739"] = [{"values":[{"sourceSpan":{"start":[853,3],"name":".spago/option/v6.0.1/src/Option.purs","end":[855,29]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"fromRecord'","moduleName":"Option","info":{"values":[{"typeClassArguments":[["record",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["required",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["optional",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Option"],"FromRecord"],"type":{"tag":"ForAll","contents":["record",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["required",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["optional",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Option"],"FromRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"record"},{"tag":"TypeVar","contents":"required"},{"tag":"TypeVar","contents":"optional"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"record"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Record"]},{"tag":"TypeVar","contents":"required"}]},{"tag":"TypeVar","contents":"optional"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"The given `Record record` must have no more fields than expected.\n\nE.g. The following definitions are valid.\n```PureScript\noption1 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption1 = Option.fromRecord' { foo: true, bar: 31 }\n\noption2 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption2 = Option.fromRecord' {}\n\noption3 :: Option.Record ( foo :: Boolean ) ( bar :: Int )\noption3 = Option.fromRecord' { foo: true }\n```\n\nHowever, the following definitions are not valid as the given records have more fields than the expected `Option _`.\n```PureScript\n-- This will not work as it has the extra field `baz`\noption3 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption3 = Option.fromRecord' { foo: true, bar: 31, baz: \"hi\" }\n\n-- This will not work as it has the extra field `qux`\noption4 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption4 = Option.fromRecord' { qux: [] }\n```\n\nAnd, this definition is not valid as the given record lacks the required fields.\n```PureScript\noption5 :: Option.Record ( baz :: String ) ( foo :: Boolean, bar :: Int )\noption5 = Option.fromRecord' { foo: true, bar: 31 }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2776,1],"name":".spago/option/v6.0.1/src/Option.purs","end":[2780,27]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"recordFromRecord","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["record",{"tag":"ForAll","contents":["required",{"tag":"ForAll","contents":["optional",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Option"],"FromRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"record"},{"tag":"TypeVar","contents":"required"},{"tag":"TypeVar","contents":"optional"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"record"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Record"]},{"tag":"TypeVar","contents":"required"}]},{"tag":"TypeVar","contents":"optional"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The given `Record record` must have no more fields than expected.\n\nE.g. The following definitions are valid.\n```PureScript\noption1 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption1 = Option.recordFromRecord { foo: true, bar: 31 }\n\noption2 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption2 = Option.recordFromRecord {}\n\noption3 :: Option.Record ( foo :: Boolean ) ( bar :: Int )\noption3 = Option.recordFromRecord { foo: true }\n```\n\nHowever, the following definitions are not valid as the given records have more fields than the expected `Option _`.\n```PureScript\n-- This will not work as it has the extra field `baz`\noption3 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption3 = Option.recordFromRecord { foo: true, bar: 31, baz: \"hi\" }\n\n-- This will not work as it has the extra field `qux`\noption4 :: Option.Record () ( foo :: Boolean, bar :: Int )\noption4 = Option.recordFromRecord { qux: [] }\n```\n\nAnd, this definition is not valid as the given record lacks the required fields.\n```PureScript\noption5 :: Option.Record ( baz :: String ) ( foo :: Boolean, bar :: Int )\noption5 = Option.recordFromRecord { foo: true, bar: 31 }\n```\n\nThis is an alias for `fromRecord'` so the documentation is a bit clearer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Transform/Row.purs","end":[30,28]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"mkInputFields","moduleName":"Formless.Transform.Row","info":{"values":[{"type":{"tag":"ForAll","contents":["inputs",{"tag":"ForAll","contents":["form",{"tag":"ForAll","contents":["xs",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"inputs"},{"tag":"TypeVar","contents":"xs"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"inputs"}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Formless","Transform","Row"],"MakeInputFieldsFromRow"],"constraintArgs":[{"tag":"TypeVar","contents":"xs"},{"tag":"TypeVar","contents":"inputs"},{"tag":"TypeVar","contents":"inputs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"FormProxy"]},{"tag":"TypeVar","contents":"form"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function to transform a row of labels into a InputFields. This allows you\nto go directly from a custom form newtype to an inputs record without having to\nfill in any values. Requires that all members have an instance of the\n`Initial` type class (all monoidal values do by default, along with some\nother primitives).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Transform/Record.purs","end":[57,31]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"wrapInputFunctions","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["ifs'",{"tag":"ForAll","contents":["ifs",{"tag":"ForAll","contents":["form",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs'"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"WrapField"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ifs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputFunction"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provided a record, where each field in the record contains\na function from `input -> input`, wraps each function in\nthe InputField type for compatibility with Formless\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,1],"name":".spago/halogen-formless/v1.0.0/src/Formless/Transform/Record.purs","end":[46,28]},"score":0,"packageInfo":{"values":["halogen-formless"],"tag":"Package"},"name":"wrapInputFields","moduleName":"Formless.Transform.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["is'",{"tag":"ForAll","contents":["is",{"tag":"ForAll","contents":["form",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is'"}]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Heterogeneous","Mapping"],"HMap"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Formless","Transform","Record"],"WrapField"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"is"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"form"},{"tag":"TypeConstructor","contents":[["Prim"],"Record"]}]},{"tag":"TypeConstructor","contents":[["Formless","Types","Form"],"InputField"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provided a record, where each field in the record contains\na value of type `input`, wraps each value in the InputField\ntype for compatibility with Formless\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[570,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Map/Internal.purs","end":[570,88]},"score":30,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"fromFoldableWithIndex","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert any indexed foldable collection into a map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[205,1],"name":".spago/unordered-collections/v1.8.3/src/Data/HashMap.purs","end":[205,97]},"score":4,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"fromFoldableWithIndex","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"k"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Turn a foldable functor with index into a hash map.\n\nThis can be used to convert, for example, an ordered map into a\nhash map with the same keys and values, or an array into a hash\nmap with values indexed by their position in the array.\n\n```PureScript\nfromFoldableWithIndex [\"a\", \"b\"] == fromArray [Tuple 0 \"a\", Tuple 1 \"b\"]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/subcategory/v0.2.0/src/Relation/Reflexive.purs","end":[15,58]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"reflect'","moduleName":"Control.Subcategory.Relation.Reflexive","info":{"values":[{"typeClassArguments":[["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}],["p",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}]],"typeClass":[["Control","Subcategory","Relation","Reflexive"],"Reflexive"],"type":{"tag":"ForAll","contents":["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["p",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Relation","Reflexive"],"Reflexive"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,7],"name":".spago/subcategory/v0.2.0/src/HasTerminate.purs","end":[21,80]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"terminate'","moduleName":"Control.Subcategory.HasTerminate","info":{"values":[{"typeClassArguments":[["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}],["u",{"tag":"NamedKind","contents":[["Prim"],"Type"]}]],"typeClass":[["Control","Subcategory","HasTerminate"],"HasTerminate"],"type":{"tag":"ForAll","contents":["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["u",{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasTerminate"],"HasTerminate"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"u"}]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,7],"name":".spago/subcategory/v0.2.0/src/HasIntroduce.purs","end":[21,80]},"score":1,"packageInfo":{"values":["subcategory"],"tag":"Package"},"name":"introduce'","moduleName":"Control.Subcategory.HasIntroduce","info":{"values":[{"typeClassArguments":[["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]}],["s",{"tag":"NamedKind","contents":[["Prim"],"Type"]}]],"typeClass":[["Control","Subcategory","HasIntroduce"],"HasIntroduce"],"type":{"tag":"ForAll","contents":["c",{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"FunKind","contents":[{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"NamedKind","contents":[["Prim"],"Type"]}]}]},{"tag":"ForAll","contents":["s",{"tag":"NamedKind","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","HasIntroduce"],"HasIntroduce"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Subcategory","Constituency"],"ObjectOf"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy3"]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,3],"name":".spago/transformers/v4.2.0/src/Control/Monad/Trans/Class.purs","end":[23,46]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"lift","moduleName":"Control.Monad.Trans.Class","info":{"values":[{"typeClassArguments":[["t",null]],"typeClass":[["Control","Monad","Trans","Class"],"MonadTrans"],"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Trans","Class"],"MonadTrans"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]