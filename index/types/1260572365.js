// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1260572365"] = [{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/pathy/v7.0.1/src/Pathy/Name.purs","end":[43,89]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"splitName","moduleName":"Pathy.Name","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Name"],"Name"]},{"tag":"TypeVar","contents":"n"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["name",{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]},{"tag":"RCons","contents":["ext",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"REmpty","contents":{}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Splits `Name` in name and extension part.\n\n```purescript\nsplitName (Name \".foo\")    == { name: \".foo\", extension: Nothing }\nsplitName (Name \"foo.\")    == { name: \"foo.\", extension: Nothing }\nsplitName (Name \"foo\")     == { name: \"foo\",  extension: Nothing }\nsplitName (Name \".\")       == { name: \".\",    extension: Nothing }\nsplitName (Name \"foo.baz\") == { name: \"foo\",  extension: Just \"baz\" }\n```\n_Note, in real code all strings from this examples would be `NonEmptyString`._\n\nAlso for any `Name` this property holds:\n```purescript\njoinName <<< splitName = id\n````\nsee [`joinName`](#v:joinName).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[158,1],"name":".spago/lists/v5.4.1/src/Data/List/NonEmpty.purs","end":[158,70]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.List.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[201,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[201,78]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[231,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[231,70]},"score":59,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]