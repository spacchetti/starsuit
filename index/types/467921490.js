// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["467921490"] = [{"values":[{"sourceSpan":{"start":[692,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[692,79]},"score":59,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"splitAt","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["before",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["after",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Splits an array into two subarrays, where `before` contains the elements\nup to (but not including) the given index, and `after` contains the rest\nof the elements, from that index on.\n\n```purescript\n>>> splitAt 3 [1, 2, 3, 4, 5]\n{ before: [1, 2, 3], after: [4, 5] }\n```\n\nThus, the length of `(splitAt i arr).before` will equal either `i` or\n`length arr`, if that is shorter. (Or if `i` is negative the length will\nbe 0.)\n\n```purescript\nsplitAt 2 ([] :: Array Int) == { before: [], after: [] }\nsplitAt 3 [1, 2, 3, 4, 5] == { before: [1, 2, 3], after: [4, 5] }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[339,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[339,87]},"score":59,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"splitAt","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["before",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"RCons","contents":["after",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"REmpty","contents":{}}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]