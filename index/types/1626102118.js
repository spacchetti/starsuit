// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1626102118"] = [{"values":[{"sourceSpan":{"start":[189,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Indent.purs","end":[189,85]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentNoAp","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `<+/>` but doesn't apply the function to the parsed value\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/free/v6.0.1/src/Data/Yoneda.purs","end":[72,66]},"score":13,"packageInfo":{"values":["free"],"tag":"Package"},"name":"hoistYoneda","moduleName":"Data.Yoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Yoneda"],"Yoneda"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Yoneda"],"Yoneda"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Use a natural transformation to change the generating type constructor of a\n`Yoneda`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[667,1],"name":".spago/ordered-collections/v2.0.1/src/Data/Map/Internal.purs","end":[667,67]},"score":24,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"difference","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Difference of two maps. Return elements of the first map where\nthe keys do not exist in the second map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[662,1],"name":".spago/ordered-collections/v2.0.1/src/Data/Map/Internal.purs","end":[662,69]},"score":24,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"intersection","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compute the intersection of two maps, preferring values from the first map in the case\nof duplicate keys.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[356,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashMap.purs","end":[356,84]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"difference","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["w",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compute the difference of two maps, that is a new map of all the\nmappings in the left map that do not have a corresponding key in\nthe right map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":".spago/logging/v3.0.0/src/Control/Logger.purs","end":[55,63]},"score":0,"packageInfo":{"values":["logging"],"tag":"Package"},"name":"hoist","moduleName":"Control.Logger","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["m'",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"m'"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Logger"],"Logger"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Logger"],"Logger"]},{"tag":"TypeVar","contents":"m'"}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Apply a natural transformation to the underlying functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/freeap/v6.0.0/src/Control/Applicative/Free.purs","end":[117,66]},"score":2,"packageInfo":{"values":["freeap"],"tag":"Package"},"name":"hoistFreeAp","moduleName":"Control.Applicative.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Applicative","Free"],"FreeAp"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Applicative","Free"],"FreeAp"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Natural transformation from `FreeAp f a` to `FreeAp g a` given a\nnatural transformation from `f` to `g`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/concur-core/v0.4.2/src/Concur/Core/Patterns.purs","end":[104,72]},"score":1,"packageInfo":{"values":["concur-core"],"tag":"Package"},"name":"mapWire","moduleName":"Concur.Core.Patterns","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Lens'"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","Core","Patterns"],"Wire"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"s"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","Core","Patterns"],"Wire"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Map a Lens over a Wire\n"}],"tag":"SearchResult"}]