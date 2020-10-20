// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1924225826"] = [{"values":[{"sourceSpan":{"start":[349,1],"name":".spago/ordered-set/v0.4.0/src/Data/Set/Ordered.purs","end":[349,81]},"score":0,"packageInfo":{"values":["ordered-set"],"tag":"Package"},"name":"span","moduleName":"Data.Set.Ordered","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[303,1],"name":".spago/ordered-set/v0.4.0/src/Data/Set/Ordered.purs","end":[303,83]},"score":0,"packageInfo":{"values":["ordered-set"],"tag":"Package"},"name":"partition","moduleName":"Data.Set.Ordered","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","Ordered"],"OSet"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[613,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[613,83]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"partition","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns a lists of elements which do and do not satisfy a predicate.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[576,1],"name":".spago/lists/v5.4.1/src/Data/List.purs","end":[576,81]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"span","moduleName":"Data.List","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Split a list into two parts:\n\n1. the longest initial segment for which all elements satisfy the specified predicate\n2. the remaining elements\n\nFor example,\n\n```purescript\nspan (\\n -> n % 2 == 1) (1 : 3 : 2 : 4 : 5 : Nil) == { init: (1 : 3 : Nil), rest: (2 : 4 : 5 : Nil) }\n```\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[268,1],"name":".spago/lists/v5.4.1/src/Data/List/NonEmpty.purs","end":[268,95]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"partition","moduleName":"Data.List.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[256,1],"name":".spago/lists/v5.4.1/src/Data/List/NonEmpty.purs","end":[256,93]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"span","moduleName":"Data.List.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[598,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[598,83]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"partition","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns a tuple of lists of elements which do\nand do not satisfy a predicate, respectively.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[561,1],"name":".spago/lists/v5.4.1/src/Data/List/Lazy.purs","end":[561,81]},"score":46,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"span","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Split a list into two parts:\n\n1. the longest initial segment for which all elements satisfy the specified predicate\n2. the remaining elements\n\nFor example,\n\n```purescript\nspan (\\n -> n % 2 == 1) (1 : 3 : 2 : 4 : 5 : Nil) == Tuple (1 : 3 : Nil) (2 : 4 : 5 : Nil)\n```\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[300,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[301,53]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"span","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The time complexity of `span` only depends on the length of the resulting\n`init` ArrayView.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView.purs","end":[218,98]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"partition","moduleName":"Data.ArrayView","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[327,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[331,50]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"span","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[273,1],"name":".spago/array-views/v0.0.2/src/Data/ArrayView/NonEmpty.purs","end":[277,46]},"score":0,"packageInfo":{"values":["array-views"],"tag":"Package"},"name":"partition","moduleName":"Data.ArrayView.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"NonEmptyArrayView"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","ArrayView","Internal"],"ArrayView"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[815,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[819,42]},"score":56,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"span","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Split an array into two parts:\n\n1. the longest initial subarray for which all elements satisfy the\n   specified predicate\n2. the remaining elements\n\n```purescript\nspan (\\n -> n % 2 == 1) [1,3,2,4,5] == { init: [1,3], rest: [2,4,5] }\n```\n\nRunning time: `O(n)`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[597,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[601,39]},"score":56,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"partition","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Partition an array using a predicate function, creating a set of\nnew arrays. One for the values satisfying the predicate function\nand one for values that don't.\n\n```purescript\npartition (_ > 0) [-1, 4, -5, 7] = { yes: [4, 7], no: [-1, -5] }\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[335,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[339,42]},"score":56,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"span","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["init",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[284,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[288,38]},"score":56,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"partition","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["yes",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["no",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]