// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["150413720"] = [{"values":[{"sourceSpan":{"start":[307,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Token.purs","end":[307,92]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"makeTokenParser","moduleName":"Text.Parsing.Parser.Token","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser","Token"],"GenLanguageDef"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser","Token"],"GenTokenParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The expression `makeTokenParser language` creates a `GenTokenParser`\nrecord that contains lexical parsers that are\ndefined using the definitions in the `language` record.\n\nThe use of this function is quite stylized - one imports the\nappropiate language definition and selects the lexical parsers that\nare needed from the resulting `GenTokenParser`.\n\n```purescript\nmodule Main where\n\nimport Text.Parsing.Parser.Language (haskellDef)\nimport Text.Parsing.Parser.Token (makeTokenParser)\n\n-- The parser\nexpr = parens expr\n   <|> identifier\n   <|> ...\n\n\n-- The lexer\ntokenParser = makeTokenParser haskellDef\nparens      = tokenParser.parens\nbraces      = tokenParser.braces\nidentifier  = tokenParser.identifier\nreserved    = tokenParser.reserved\n...\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[222,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Indent.purs","end":[222,73]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentParens","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding parentheses\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Indent.purs","end":[218,73]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentBraces","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding braces\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[214,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Indent.purs","end":[214,73]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentAngles","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding angle brackets\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[210,1],"name":".spago/parsing/v6.0.1/src/Text/Parsing/Parser/Indent.purs","end":[210,75]},"score":11,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentBrackets","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding brackets\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[151,1],"name":".spago/pathy/v8.1.0/src/Pathy/Path.purs","end":[151,63]},"score":0,"packageInfo":{"values":["pathy"],"tag":"Package"},"name":"parentOf","moduleName":"Pathy.Path","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Pathy","Phantom"],"IsRelOrAbs"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Dir"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Dir"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a path that points to the parent directory of the specified path.\n\nCalling `parentOf` on `rootDir` will return `rootDir`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[283,1],"name":".spago/halogen-hooks/v0.5.0/src/Halogen/Hooks/HookM.purs","end":[283,51]},"score":1,"packageInfo":{"values":["halogen-hooks"],"tag":"Package"},"name":"fork","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"ForkId"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Starts a `HalogenM` process running independent from the current `eval`\n\"thread\".\n\nA commonly use case for `fork` is in component initializers where some\nasync action is started. Normally all interaction with the component will\nbe blocked until the initializer completes, but if the async action is\n`fork`ed instead, the initializer can complete synchronously while the\nasync action continues.\n\nSome care needs to be taken when using a `fork` that can modify the\ncomponent state, as it's easy for the forked process to \"clobber\" the state\n(overwrite some or all of it with an old value) by mistake.\n\nWhen a component is disposed of any active forks will automatically\nbe killed. New forks can be started during finalization but there will be\nno means of killing them.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[709,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[709,75]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"field","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"SelectionSet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Field"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[699,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[699,83]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"selection","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"SelectionSet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Selection"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[692,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[692,93]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"inlineFragment","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"SelectionSet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"InlineFragment"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[338,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[338,79]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"nonNullType","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Type"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"NonNullType"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[335,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[335,73]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"listType","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Type"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"ListType"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[249,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[249,84]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"objectValue","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Value"]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"ObjectValue"]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[234,78]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"argument","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Value"]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Argument"]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[231,1],"name":".spago/graphql-client/v4.0.12/src/Data/GraphQL/Parser.purs","end":[231,80]},"score":0,"packageInfo":{"values":["graphql-client"],"tag":"Package"},"name":"listValue","moduleName":"Data.GraphQL.Parser","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Text","Parsing","Parser","String"],"StringLike"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"Value"]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Parser"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"ParensInType","contents":{"tag":"TypeConstructor","contents":[["Data","GraphQL","AST"],"ListValue"]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]