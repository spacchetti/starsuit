// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1604641137"] = [{"values":[{"sourceSpan":{"start":[217,1],"name":".spago/unordered-collections/v1.8.3/src/Data/HashMap.purs","end":[217,82]},"score":4,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"toArrayBy","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a map to an array using the given function.\n\nNote that no particular order is guaranteed.\n\n```PureScript\ntoArrayBy Tuple (singleton 1 2) == [Tuple 1 2]\ntoArrayBy const        m == keys m\ntoArrayBy (flip const) m == values m\n```\n"}],"tag":"SearchResult"}]