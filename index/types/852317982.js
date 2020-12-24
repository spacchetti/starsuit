// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["852317982"] = [{"values":[{"sourceSpan":{"start":[246,1],"name":".spago/ordered-set/v0.4.0/src/Data/Set/Ordered.purs","end":[246,66]},"score":0,"packageInfo":{"values":["ordered-set"],"tag":"Package"},"name":"uncons","moduleName":"Data.Set.Ordered","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[259,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[259,66]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"uncons","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Break a list into its first element, and the remaining elements,\nor `Nothing` if the list is empty.\n\nRunning time: `O(1)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[284,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[284,66]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"uncons","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Break a list into its first element, and the remaining elements,\nor `Nothing` if the list is empty.\n\nRunning time: `O(1)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[254,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[254,76]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"uncons","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"*O(1)*\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[342,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[342,68]},"score":59,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"uncons","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["head",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["tail",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Break an array into its first element and remaining elements.\n\nUsing `uncons` provides a way of writing code that would use cons patterns\nin Haskell or pre-PureScript 0.7:\n``` purescript\nf (x : xs) = something\nf [] = somethingElse\n```\nBecomes:\n``` purescript\nf arr = case uncons arr of\n  Just { head: x, tail: xs } -> something\n  Nothing -> somethingElse\n```\n"}],"tag":"SearchResult"}]