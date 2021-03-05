// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["549393473"] = [{"values":[{"sourceSpan":{"start":[415,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Map/Internal.purs","end":[415,72]},"score":14,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"submap","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"k"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"k"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns a new map containing all entries of the given map which lie\nbetween a given lower and upper bound, treating `Nothing` as no bound i.e.\nincluding the smallest (or largest) key in the map, no matter how small\n(or large) it is. For example:\n\n```purescript\nsubmap (Just 1) (Just 2)\n  (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n  == fromFoldable [Tuple 1 \"one\", Tuple 2 \"two\"]\n\nsubmap Nothing (Just 2)\n  (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n  == fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\"]\n```\n\nThe function is entirely specified by the following\nproperty:\n\n```purescript\nGiven any m :: Map k v, mmin :: Maybe k, mmax :: Maybe k, key :: k,\n  let m' = submap mmin mmax m in\n    if (maybe true (\\min -> min <= key) mmin &&\n        maybe true (\\max -> max >= key) mmax)\n      then lookup key m == lookup key m'\n      else not (member key m')\n```\n"}],"tag":"SearchResult"}]