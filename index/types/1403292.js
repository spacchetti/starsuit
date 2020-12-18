// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1403292"] = [{"values":[{"sourceSpan":{"start":[524,3],"name":".spago/querydsl/v0.10.1/src/QueryDsl.purs","end":[524,97]},"score":0,"packageInfo":{"values":["querydsl"],"tag":"Package"},"name":"getUpdateExpressions","moduleName":"QueryDsl","info":{"values":[{"typeClassArguments":[["cols",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["exprs",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["QueryDsl"],"UpdateExpressions"],"type":{"tag":"ForAll","contents":["cols",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["exprs",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["QueryDsl"],"UpdateExpressions"],"constraintArgs":[{"tag":"TypeVar","contents":"cols"},{"tag":"TypeVar","contents":"exprs"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"cols"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"exprs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["QueryDsl"],"ColumnName"]}]},{"tag":"TypeConstructor","contents":[["QueryDsl"],"UntypedExpression"]}]}}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[115,1],"name":".spago/these/v4.0.0/src/Data/These.purs","end":[115,66]},"score":2,"packageInfo":{"values":["these"],"tag":"Package"},"name":"maybeThese","moduleName":"Data.These","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a pair of `Maybe`s and attempts to create a `These` from them.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[399,1],"name":".spago/ordered-set/v0.4.0/src/Data/Set/Ordered.purs","end":[399,56]},"score":0,"packageInfo":{"values":["ordered-set"],"tag":"Package"},"name":"zip","moduleName":"Data.Set.Ordered","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[730,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[730,56]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"zip","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Collect pairs of elements at the same positions in two lists.\n\nRunning time: `O(min(m, n))`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[296,1],"name":".spago/lists/v5.4.1/src/Data/List/NonEmpty.purs","end":[296,80]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"zip","moduleName":"Data.List.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[706,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[706,56]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"zip","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Collect pairs of elements at the same positions in two lists.\n\nRunning time: `O(min(m, n))`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Common.purs","end":[44,65]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"tuple","moduleName":"Data.Codec.Argonaut.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A codec for `Tuple` values.\n\nEncodes as a two-element array in JSON.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Common.purs","end":[77,71]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"map","moduleName":"Data.Codec.Argonaut.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A codec for `Map` values.\n\nEncodes as an array of two-element key/value arrays in JSON.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Common.purs","end":[51,67]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"either","moduleName":"Data.Codec.Argonaut.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A codec for `Either` values.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[391,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[391,71]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"zip","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[425,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[425,95]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"zip","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1066,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[1066,59]},"score":58,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"zip","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes two arrays and returns an array of corresponding pairs.\nIf one input array is short, excess elements of the longer array are\ndiscarded.\n\n```purescript\nzip [1, 2, 3] [\"a\", \"b\"] = [Tuple 1 \"a\", Tuple 2 \"b\"]\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[430,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[430,83]},"score":58,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"zip","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]