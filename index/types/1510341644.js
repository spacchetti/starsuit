// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1510341644"] = [{"values":[{"sourceSpan":{"start":[360,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut.purs","end":[360,76]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"prismaticCodec","moduleName":"Data.Codec.Argonaut","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Adapts an existing codec with a pair of functions to allow a value to be\nfurther refined. If the inner decoder fails an `UnexpectedValue` error will\nbe raised for JSON input.\n\nThis function is named as such as the pair of functions it accepts\ncorrespond with the `preview` and `view` functions of a `Prism`-style lens.\n\nAn example of this would be a codec for `Data.String.NonEmpty.NonEmptyString`:\n\n```purescript\nnonEmptyString ∷ CA.JsonCodec NES.NonEmptyString\nnonEmptyString = CA.prismaticCodec NES.fromString NES.toString CA.string\n```\n\nAnother example might be to handle a mapping from a small sum type to\nstrings:\n\n```purescript\ndata Direction = North | South | West | East\n\ndirectionCodec :: JsonCodec Direction\ndirectionCodec = prismaticCodec dec enc string\n  where\n    dec = case _ of\n      \"N\" -> Just North\n      \"S\" -> Just South\n      \"W\" -> Just West\n      \"E\" -> Just East\n      _ -> Nothing\n\n    enc = case _ of\n      North -> \"N\"\n      South -> \"S\"\n      West -> \"W\"\n      East -> \"E\"\n```\n\nAlthough for this latter case there are some other options too, in the form\nof `Data.Codec.Argonaut.Generic.nullarySum` and `Data.Codec.Argonaut.Sum.enumSum`.\n"}],"tag":"SearchResult"}]