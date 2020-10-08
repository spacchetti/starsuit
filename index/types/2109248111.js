// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2109248111"] = [{"values":[{"sourceSpan":{"start":[81,1],"name":".spago/unfoldable/v4.1.0/src/Data/Unfoldable1.purs","end":[88,13]},"score":18,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"replicate1A","moduleName":"Data.Unfoldable1","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Traversable"],"Traversable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Perform an `Apply` action `n` times (at least once, so values `n` less\nthan 1 will be treated as 1), and accumulate the results.\n\n``` purescript\n> replicate1A 2 (randomInt 1 10) :: Effect (NEL.NonEmptyList Int)\n(NonEmptyList (NonEmpty 8 (2 : Nil)))\n> replicate1A 0 (randomInt 1 10) :: Effect (NEL.NonEmptyList Int)\n(NonEmptyList (NonEmpty 4 Nil))\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/unfoldable/v4.1.0/src/Data/Unfoldable.purs","end":[84,13]},"score":18,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"replicateA","moduleName":"Data.Unfoldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Perform an Applicative action `n` times, and accumulate all the results.\n\n``` purescript\n> replicateA 5 (randomInt 1 10) :: Effect (Array Int)\n[1,3,2,7,5]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/codec-argonaut/v7.1.0/src/Data/Codec/Argonaut/Record.purs","end":[27,29]},"score":1,"packageInfo":{"values":["codec-argonaut"],"tag":"Package"},"name":"object","moduleName":"Data.Codec.Argonaut.Record","info":{"values":[{"type":{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["ro",{"tag":"ForAll","contents":["ri",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Codec","Argonaut","Record"],"RowListCodec"],"constraintArgs":[{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"ro"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ri"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Codec","Argonaut"],"JsonCodec"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ro"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs a `JsonCodec` for a `Record` from a name and a record of codecs.\nThe name is used in the error message produced when decoding fails.\n\n```purescript\ntype Person = { name ∷ String, age ∷ Int }\n\npersonCodec ∷ CA.JsonCodec Person\npersonCodec = CAR.object \"Person\" { name: CA.string, age: CA.int }\n```\n"}],"tag":"SearchResult"}]