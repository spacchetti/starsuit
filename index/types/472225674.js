// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["472225674"] = [{"values":[{"sourceSpan":{"start":[138,1],"name":".spago/websocket-moderate/v7.0.2/src/WebSocket.purs","end":[143,39]},"score":0,"packageName":"websocket-moderate","name":"dimapJson","moduleName":"WebSocket","info":{"values":[{"type":{"tag":"ForAll","contents":["receive",{"tag":"ForAll","contents":["send",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"send"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"receive"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["WebSocket"],"WebSocketsApp"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"receive"}]},{"tag":"TypeVar","contents":"send"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["WebSocket"],"WebSocketsApp"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[183,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[183,76]},"score":0,"packageName":"parsing","name":"notFollowedBy","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fail if the specified parser matches.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[176,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[176,72]},"score":0,"packageName":"parsing","name":"skipMany1","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Skip at least one instance of a phrase.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[172,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[172,71]},"score":0,"packageName":"parsing","name":"skipMany","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Skip many instances of a phrase.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[89,69]},"score":0,"packageName":"parsing","name":"lookAhead","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parse a phrase, without modifying the consumed state or stream position.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[81,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[81,70]},"score":0,"packageName":"parsing","name":"tryRethrow","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `try`, but will reannotate the error location to the `try` point.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[73,63]},"score":0,"packageName":"parsing","name":"try","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"In case of failure, reset the stream to the unconsumed state.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Combinators.purs","end":[65,71]},"score":0,"packageName":"parsing","name":"optional","moduleName":"Text.Parsing.Parser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Optionally parse something, failing quietly.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/tuples-native/v2.1.0/src/Data/Tuple/Native.purs","end":[31,50]},"score":0,"packageName":"tuples-native","name":"xt3","moduleName":"Data.Tuple.Native","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Native"],"T3"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Nested"],"Tuple3"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[190,1],"name":".spago/selection-foldable/v0.2.0/src/Data/SelectionFoldableWithData.purs","end":[190,93]},"score":0,"packageName":"selection-foldable","name":"deselect","moduleName":"Data.SelectionFoldableWithData","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["d",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","SelectionFoldableWithData"],"SelectionFoldableWithData"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","SelectionFoldableWithData"],"SelectionFoldableWithData"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Clears the selection and its associated data.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[241,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix.purs","end":[241,82]},"score":0,"packageName":"sized-matrices","name":"negateMatrix","moduleName":"Data.Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["h",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"h"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix/Transformations.purs","end":[9,69]},"score":0,"packageName":"sized-matrices","name":"transpose","moduleName":"Data.Matrix.Transformations","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"h"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":".spago/machines/v5.1.0/src/Data/Machine/Mealy.purs","end":[106,64]},"score":0,"packageName":"machines","name":"loop","moduleName":"Data.Machine.Mealy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Common.purs","end":[40,54]},"score":0,"packageName":"profunctor-lenses","name":"simple","moduleName":"Data.Lens.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["p",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic'"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Optic'"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"This is useful for when you want to restrict the type of another optic.\nFor example, suppose you have the following declarations:\n```purescript\nnewtype X = X Int\nderive instance newtypeX :: Newtype X _\n```\n\nAttempting to view with the `_Newtype` optic:\n```purescript\nX 42 ^. _Newtype\n```\nWill result in a type error:\n```\n The inferred type\n   forall t3 t5. Newtype t3 t5 => Int\n has type variables which are not mentioned in the body of the type.\n Consider adding a type annotation.\n```\n\nHowever, if we apply the `simple` function:\n```purescript\n X 42 ^. simple _Newtype\n```\nWe get the expected result `42`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[190,1],"name":".spago/errors/v4.1.0/src/Data/EitherR.purs","end":[190,66]},"score":0,"packageName":"errors","name":"flipET","moduleName":"Data.EitherR","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Trans"],"ExceptT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Trans"],"ExceptT"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/errors/v4.1.0/src/Data/EitherR.purs","end":[133,61]},"score":0,"packageName":"errors","name":"runExceptRT","moduleName":"Data.EitherR","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","EitherR"],"ExceptRT"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"e"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Trans"],"ExceptT"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"r"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]