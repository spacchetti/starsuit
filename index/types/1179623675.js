// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1179623675"] = [{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/parsing-repetition/v0.0.6/src/Text/Parsing/String/Repetition.purs","end":[31,90]},"score":1,"packageInfo":{"values":["parsing-repetition"],"tag":"Package"},"name":"until","moduleName":"Text.Parsing.String.Repetition","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Consumes the current parse input with a parser `p` until the result of a parser `q` is successful.\nDoes not consume the remaining parse input with the successful result of `q`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,1],"name":".spago/parsing/v5.1.0/src/Text/Parsing/Parser/Expr.purs","end":[41,98]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"buildExprParser","moduleName":"Text.Parsing.Parser.Expr","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser","Expr"],"OperatorTable"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"ParserT"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build a parser from an `OperatorTable`.\n\nFor example:\n\n```purescript\nbuildExprParser [ [ Infix (string \"/\" $> div) AssocRight ]\n                , [ Infix (string \"*\" $> mul) AssocRight ]\n                , [ Infix (string \"-\" $> sub) AssocRight ]\n                , [ Infix (string \"+\" $> add) AssocRight ]\n                ] digit\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[244,1],"name":".spago/sized-matrices/v1.0.0/src/Data/Matrix.purs","end":[244,106]},"score":0,"packageInfo":{"values":["sized-matrices"],"tag":"Package"},"name":"mulMatrix","moduleName":"Data.Matrix","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["h",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"h"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"w"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","CommutativeRing"],"CommutativeRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Matrix"],"Matrix"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/machines/v5.1.0/src/Data/Machine/Mealy.purs","end":[159,86]},"score":0,"packageInfo":{"values":["machines"],"tag":"Package"},"name":"interleave","moduleName":"Data.Machine.Mealy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"MealyT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/indexed-monad/v1.2.0/src/Control/Monad/Indexed.purs","end":[32,72]},"score":3,"packageInfo":{"values":["indexed-monad"],"tag":"Package"},"name":"iunlessM","moduleName":"Control.Monad.Indexed","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Indexed"],"IxMonad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/indexed-monad/v1.2.0/src/Control/Monad/Indexed.purs","end":[29,70]},"score":3,"packageInfo":{"values":["indexed-monad"],"tag":"Package"},"name":"iwhenM","moduleName":"Control.Monad.Indexed","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Indexed"],"IxMonad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]