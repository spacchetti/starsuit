// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["279496439"] = [{"values":[{"sourceSpan":{"start":[160,1],"name":".spago/parsing/v5.0.3/src/Text/Parsing/Parser/Indent.purs","end":[160,60]},"score":0,"packageName":"parsing","name":"withPos","moduleName":"Text.Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","Indent"],"IndentParser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses using the current location for indentation reference\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":".spago/run/v3.0.1/src/Run.purs","end":[145,12]},"score":0,"packageName":"run","name":"send","moduleName":"Run","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Run"],"Run"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Enqueues an instruction in the `Run` Monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[140,1],"name":".spago/routing-duplex/v0.4.1/src/Routing/Duplex.purs","end":[140,54]},"score":0,"packageName":"routing-duplex","name":"end","moduleName":"Routing.Duplex","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`end codec` will only suceed if `codec` succeeds and there are no\nadditional path segments remaining to be processed.\n\n```purescript\nparse (end segment) \"abc\" == Right \"abc\"\nparse (end segment) \"abc/def\" == Left (ExpectedEndOfPath \"def\")\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/routing-duplex/v0.4.1/src/Routing/Duplex.purs","end":[130,55]},"score":0,"packageName":"routing-duplex","name":"root","moduleName":"Routing.Duplex","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Modifies a given codec to require a prefix of '/'.\nYou can think of it as stripping and adding the '/' at the beginning of path,\nfailing if it's not there.\n\n```purescript\nparse (root segment) \"/abc\" == Right \"abc\"\nparse (root segment) \"abc\" == Left (Expected \"\" \"abc\")\n\nprint (root segment) \"abc\" == \"/abc\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/pathy/v7.0.1/src/Pathy/Sandboxed.purs","end":[54,55]},"score":0,"packageName":"pathy","name":"unsandbox","moduleName":"Pathy.Sandboxed","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Sandboxed"],"SandboxedPath"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Extracts the original path from a `SandboxedPath`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/pathy/v7.0.1/src/Pathy/Sandboxed.purs","end":[50,61]},"score":0,"packageName":"pathy","name":"sandboxRoot","moduleName":"Pathy.Sandboxed","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Sandboxed"],"SandboxedPath"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Abs"]}]},{"tag":"TypeConstructor","contents":[["Pathy","Phantom"],"Dir"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the location a `SandboxedPath` was sandboxed to.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/pathy/v7.0.1/src/Pathy/Sandboxed.purs","end":[46,56]},"score":0,"packageName":"pathy","name":"sandboxAny","moduleName":"Pathy.Sandboxed","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Path"],"Path"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pathy","Sandboxed"],"SandboxedPath"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sandboxes any path to `/`.\n\nThis should only be used for situations where a path is already constrained\nwithin a system so that access to `/` is safe - for instance, in URIs.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[134,1],"name":".spago/remotedata/v4.2.0/src/Network/RemoteData.purs","end":[134,55]},"score":0,"packageName":"remotedata","name":"fromEither","moduleName":"Network.RemoteData","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Network","RemoteData"],"RemoteData"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert an `Either` to `RemoteData`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,1],"name":".spago/halogen-vdom/v6.1.3/src/Halogen/VDom/Types.purs","end":[82,15]},"score":0,"packageName":"halogen-vdom","name":"runGraft","moduleName":"Halogen.VDom.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["w'",{"tag":"ForAll","contents":["a'",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","Types"],"Graft"]},{"tag":"TypeVar","contents":"a'"}]},{"tag":"TypeVar","contents":"w'"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","Types"],"VDom"]},{"tag":"TypeVar","contents":"a'"}]},{"tag":"TypeVar","contents":"w'"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,1],"name":".spago/halogen-vdom/v6.1.3/src/Halogen/VDom/DOM.purs","end":[55,50]},"score":0,"packageName":"halogen-vdom","name":"buildVDom","moduleName":"Halogen.VDom.DOM","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","DOM"],"VDomSpec"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","VDom","DOM"],"VDomMachine"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Starts an initial `VDom` machine by providing a `VDomSpec`.\n\n```purescript\nmain = do\n  machine1 ← buildVDom spec vdomTree1\n  machine2 ← Machine.step machine1 vdomTree2\n  machine3 ← Machine.step machine2 vdomTree3\n  ...\n````\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/halogen-formless/v1.0.0-rc.2/src/Formless/Data/FormFieldResult.purs","end":[43,60]},"score":0,"packageName":"halogen-formless","name":"fromEither","moduleName":"Formless.Data.FormFieldResult","info":{"values":[{"type":{"tag":"ForAll","contents":["o",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"o"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Formless","Data","FormFieldResult"],"FormFieldResult"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"o"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[316,1],"name":".spago/sized-vectors/v5.0.1/src/Data/Vec.purs","end":[316,42]},"score":0,"packageName":"sized-vectors","name":"reverse","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reverse a vector.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[308,1],"name":".spago/sized-vectors/v5.0.1/src/Data/Vec.purs","end":[308,48]},"score":0,"packageName":"sized-vectors","name":"sort","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sort a vector of `Ord`s.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/validation/v4.2.0/src/Data/Validation/Semiring.purs","end":[61,65]},"score":0,"packageName":"validation","name":"toEither","moduleName":"Data.Validation.Semiring","info":{"values":[{"type":{"tag":"ForAll","contents":["result",{"tag":"ForAll","contents":["err",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Validation","Semiring"],"V"]},{"tag":"TypeVar","contents":"err"}]},{"tag":"TypeVar","contents":"result"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"err"}]},{"tag":"TypeVar","contents":"result"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/validation/v4.2.0/src/Data/Validation/Semigroup.purs","end":[60,65]},"score":0,"packageName":"validation","name":"toEither","moduleName":"Data.Validation.Semigroup","info":{"values":[{"type":{"tag":"ForAll","contents":["result",{"tag":"ForAll","contents":["err",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Validation","Semigroup"],"V"]},{"tag":"TypeVar","contents":"err"}]},{"tag":"TypeVar","contents":"result"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"err"}]},{"tag":"TypeVar","contents":"result"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[198,1],"name":".spago/tuples/v5.1.0/src/Data/Tuple.purs","end":[198,43]},"score":0,"packageName":"tuples","name":"swap","moduleName":"Data.Tuple","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Exchange the first and second components of a tuple.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/tuples-native/v2.1.0/src/Data/Tuple/Native.purs","end":[28,44]},"score":0,"packageName":"tuples-native","name":"xt2","moduleName":"Data.Tuple.Native","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Native"],"T2"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Nested"],"Tuple2"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely coerce a `TupleN` pair into a PureScript Nested Tuple\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/tuples-native/v2.1.0/src/Data/Tuple/Native.purs","end":[24,41]},"score":0,"packageName":"tuples-native","name":"xt","moduleName":"Data.Tuple.Native","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Native"],"T2"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely coerce a `TupleN` pair into a PureScript Tuple\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/selection-foldable/v0.2.0/src/Data/SelectionFoldable.purs","end":[75,71]},"score":0,"packageName":"selection-foldable","name":"deselect","moduleName":"Data.SelectionFoldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","SelectionFoldable"],"SelectionFoldable"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","SelectionFoldable"],"SelectionFoldable"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[149,1],"name":".spago/search-trie/v1.0.0/src/Data/Search/Trie/Internal.purs","end":[152,15]},"score":0,"packageName":"search-trie","name":"mkZipper","moduleName":"Data.Search.Trie.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Search","Trie","Internal"],"Trie"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Search","Trie","Internal"],"Zipper"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[163,1],"name":".spago/search-trie/v1.0.0/src/Data/Search/Trie/Internal.purs","end":[167,14]},"score":0,"packageName":"search-trie","name":"fromZipper","moduleName":"Data.Search.Trie.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["k",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Search","Trie","Internal"],"Zipper"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Search","Trie","Internal"],"Trie"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[229,1],"name":".spago/result/v1.0.3/src/Data/Result.purs","end":[229,49]},"score":0,"packageName":"result","name":"toEither","moduleName":"Data.Result","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Result"],"Result"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"v"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a `Result` to an `Either`.\n\n```purescript\ntoEither (Error \"error\") == Left \"error\"\ntoEither (Ok \"value\") == Right \"value\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/result/v1.0.3/src/Data/Result.purs","end":[218,51]},"score":0,"packageName":"result","name":"fromEither","moduleName":"Data.Result","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Result"],"Result"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"v"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert an `Either` to a `Result`.\n\n```purescript\nfromEither (Left \"error\") == Error \"error\"\nfromEither (Right \"value\") == Ok \"value\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/leibniz/v5.0.0/src/Data/Leibniz.purs","end":[59,35]},"score":0,"packageName":"leibniz","name":"symm","moduleName":"Data.Leibniz","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Leibniz"],"~"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Leibniz"],"~"]},{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Equality is symmetric.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[327,1],"name":".spago/variant/v6.0.1/src/Data/Functor/Variant.purs","end":[327,51]},"score":0,"packageName":"variant","name":"revariantF","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"UnvariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reconstructs a VariantF given an UnvariantF eliminator.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[301,1],"name":".spago/variant/v6.0.1/src/Data/Functor/Variant.purs","end":[304,19]},"score":0,"packageName":"variant","name":"unvariantF","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"UnvariantF"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A low-level eliminator which reifies the `IsSymbol`, `Cons` and\n`Functor` constraints require to reconstruct the Variant. This\nlets you work generically with some VariantF at runtime.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/pairing/v5.1.0/src/Data/Functor/Pairing.purs","end":[49,34]},"score":0,"packageName":"pairing","name":"sym","moduleName":"Data.Functor.Pairing","info":{"values":[{"type":{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Functor","Pairing"],"⋈"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Functor","Pairing"],"⋈"]},{"tag":"TypeVar","contents":"g"},{"tag":"TypeVar","contents":"f"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Pairing is symmetric\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[125,1],"name":".spago/errors/v4.1.0/src/Data/EitherR.purs","end":[125,51]},"score":0,"packageName":"errors","name":"flipEither","moduleName":"Data.EitherR","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Flip the type variables of `Either`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/errors/v4.1.0/src/Data/EitherR.purs","end":[69,52]},"score":0,"packageName":"errors","name":"runEitherR","moduleName":"Data.EitherR","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","EitherR"],"EitherR"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"e"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"r"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/arrays/v5.3.1/src/Data/Array/ST/Iterator.purs","end":[61,54]},"score":0,"packageName":"arrays","name":"exhausted","moduleName":"Data.Array.ST.Iterator","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST","Iterator"],"Iterator"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Check whether an iterator has been exhausted.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/Writer.purs","end":[31,49]},"score":0,"packageName":"transformers","name":"runWriter","moduleName":"Control.Monad.Writer","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Writer"],"Writer"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a computation in the `Writer` monad\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/Writer.purs","end":[27,46]},"score":0,"packageName":"transformers","name":"writer","moduleName":"Control.Monad.Writer","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Writer"],"Writer"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a `Writer` from a result and output pair.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/monad-control/v5.0.0/src/Control/Monad/Trans/Control.purs","end":[64,61]},"score":0,"packageName":"monad-control","name":"tupleToWriterTStT","moduleName":"Control.Monad.Trans.Control","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Trans","Control"],"WriterTStT"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/monad-control/v5.0.0/src/Control/Monad/Trans/Control.purs","end":[61,61]},"score":0,"packageName":"monad-control","name":"writerTStTToTuple","moduleName":"Control.Monad.Trans.Control","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Trans","Control"],"WriterTStT"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[96,1],"name":".spago/st/v4.1.1/src/Control/Monad/ST/Internal.purs","end":[96,55]},"score":0,"packageName":"st","name":"read","moduleName":"Control.Monad.ST.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"STRef"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Read the current value of a mutable reference.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/Except.purs","end":[38,50]},"score":0,"packageName":"transformers","name":"runExcept","moduleName":"Control.Monad.Except","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except"],"Except"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a computation in the `Except` monad. The inverse of `except`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/transformers/v4.2.0/src/Control/Comonad/Env.purs","end":[27,43]},"score":0,"packageName":"transformers","name":"runEnv","moduleName":"Control.Comonad.Env","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Env"],"Env"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unwrap a value in the `Env` comonad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/concur-core/v0.4.2/src/Concur/Core/Types.purs","end":[76,13]},"score":0,"packageName":"concur-core","name":"flipEither","moduleName":"Concur.Core.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]