// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1486971921"] = [{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/parsing-repetition/v0.0.6/src/Text/Parsing/Array/Repetition.purs","end":[61,79]},"score":1,"packageInfo":{"values":["parsing-repetition"],"tag":"Package"},"name":"most","moduleName":"Text.Parsing.Array.Repetition","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Consumes the current parse input with a parser `p`, with `m` greedy repetitions of `p`.\nFails if `m` is greater than the constraint `n` passed to the function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/parsing-repetition/v0.0.6/src/Text/Parsing/Array/Repetition.purs","end":[30,80]},"score":1,"packageInfo":{"values":["parsing-repetition"],"tag":"Package"},"name":"least","moduleName":"Text.Parsing.Array.Repetition","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Consumes the current parse input with a parser `p`, with `n` repetitions of `p`.\nDoes not check if the remaining parse input can be moreover parsed with `p`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/parsing-repetition/v0.0.6/src/Text/Parsing/Array/Repetition.purs","end":[35,80]},"score":1,"packageInfo":{"values":["parsing-repetition"],"tag":"Package"},"name":"exact","moduleName":"Text.Parsing.Array.Repetition","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Consumes the current parse input with a parser `p`, with `n` repetitions of `p`.\nFails if the remaining parse input can be moreover be parsed with `p`.\n"}],"tag":"SearchResult"}]