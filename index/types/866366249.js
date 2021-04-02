// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["866366249"] = [{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/these/v5.0.0/src/Data/These.purs","end":[130,58]},"score":3,"packageInfo":{"values":["these"],"tag":"Package"},"name":"fromThese","moduleName":"Data.These","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes two default values and a `These` value. If the `These` value is\n`This` or `That`, the value wrapped in the `These` value and its\ncorresponding default value are wrapped into a `Tuple`.\nOtherwise, the values stored in the `Both` are rewrapped into a `Tuple`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[442,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Map/Internal.purs","end":[442,60]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"insert","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert or replace a key/value pair in a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,1],"name":".spago/arrays/v6.0.0/src/Data/Array/ST/Partial.purs","end":[32,15]},"score":49,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"poke","moduleName":"Data.Array.ST.Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Change the value at the specified index in a mutable array.\n"}],"tag":"SearchResult"}]