// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["236507206"] = [{"values":[{"sourceSpan":{"start":[1379,3],"name":".spago/option/v6.1.0/src/Option.purs","end":[1382,61]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"jsonCodec'","moduleName":"Option","info":{"values":[{"typeClassArguments":[["record",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["required",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}],["optional",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Option"],"JsonCodec"],"type":{"tag":"ForAll","contents":["record",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["required",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["optional",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Option"],"JsonCodec"],"constraintArgs":[{"tag":"TypeVar","contents":"record"},{"tag":"TypeVar","contents":"required"},{"tag":"TypeVar","contents":"optional"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"record"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Record"]},{"tag":"TypeVar","contents":"required"}]},{"tag":"TypeVar","contents":"optional"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates a `JsonCodec` for an `Option.Record _ _` given a `Record _` of `JsonCodec`s.\n\nE.g.\nThe `String` is used in errors when decoding fails.\n\n```PureScript\ntype Example\n  = Option.Record\n      ( foo :: Boolean\n      )\n      ( bar :: Int\n      )\n\njsonCodec :: Data.Codec.Argonaut.JsonCodec Example\njsonCodec =\n  Option.jsonCodec'\n    \"Example\"\n    { foo: Data.Codec.Argonaut.boolean\n    , bar: Data.Codec.Argonaut.int\n    }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2825,1],"name":".spago/option/v6.1.0/src/Option.purs","end":[2830,59]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"jsonCodecRecord","moduleName":"Option","info":{"values":[{"type":{"tag":"ForAll","contents":["required",{"tag":"ForAll","contents":["record",{"tag":"ForAll","contents":["optional",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Option"],"JsonCodec"],"constraintArgs":[{"tag":"TypeVar","contents":"record"},{"tag":"TypeVar","contents":"required"},{"tag":"TypeVar","contents":"optional"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"record"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Record"]},{"tag":"TypeVar","contents":"required"}]},{"tag":"TypeVar","contents":"optional"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a `Data.Codec.Argonaut.JsonCodec _` for an `Option.Record _ _` given a `Record _` of `Data.Codec.Argonaut.JsonCodec _`s.\n\nThe `String` is used in errors when decoding fails.\n\nE.g.\n```PureScript\ntype Example\n  = Option.Record\n      ( foo :: Boolean\n      )\n      ( bar :: Int\n      )\n\njsonCodec :: Data.Codec.Argonaut.JsonCodec Example\njsonCodec =\n  Option.jsonCodecRecord\n    \"Example\"\n    { foo: Data.Codec.Argonaut.boolean\n    , bar: Data.Codec.Argonaut.int\n    }\n```\n\nThis is an alias for `jsonCodec'` so the documentation is a bit clearer.\n"}],"tag":"SearchResult"}]