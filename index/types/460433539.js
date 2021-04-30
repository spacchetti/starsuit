// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["460433539"] = [{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Combinators.purs","end":[75,92]},"score":10,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"defaultField","moduleName":"Data.Argonaut.Decode.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Helper for use in combination with `.:?` to provide default values for optional\n`Object Json` fields.\n\nExample usage:\n```purs\nnewtype MyType = MyType\n  { foo :: String\n  , bar :: Maybe Int\n  , baz :: Boolean\n  }\n\ninstance decodeJsonMyType :: DecodeJson MyType where\n  decodeJson json = do\n    x <- decodeJson json\n    foo <- x .: \"foo\" -- mandatory field\n    bar <- x .:? \"bar\" -- optional field\n    baz <- x .:? \"baz\" .!= false -- optional field with default value of `false`\n    pure $ MyType { foo, bar, baz }\n```\n"}],"tag":"SearchResult"}]