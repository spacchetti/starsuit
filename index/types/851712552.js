// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["851712552"] = [{"values":[{"sourceSpan":{"start":[85,1],"name":".spago/react-basic/v15.0.0/src/React/Basic.purs","end":[88,55]},"score":6,"packageInfo":{"values":["react-basic"],"tag":"Package"},"name":"contextProvider","moduleName":"React.Basic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactContext"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic"],"ReactComponent"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["value",{"tag":"TypeVar","contents":"a"},{"tag":"RCons","contents":["children",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["React","Basic"],"JSX"]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[250,1],"name":".spago/ordered-set/v0.4.0/src/Data/Set/Ordered.purs","end":[250,66]},"score":0,"packageInfo":{"values":["ordered-set"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.Set.Ordered","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[267,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[267,66]},"score":48,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Break a list into its last element, and the preceding elements,\nor `Nothing` if the list is empty.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[261,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[261,76]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"*O(1)*\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[360,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[360,68]},"score":59,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsnoc","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["last",{"tag":"TypeVar","contents":"a"},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Break an array into its last element and all preceding elements.\n\n```purescript\nunsnoc [1, 2, 3] = Just {init: [1, 2], last: 3}\nunsnoc [] = Nothing\n```\n\nRunning time: `O(n)` where `n` is the length of the array\n"}],"tag":"SearchResult"}]