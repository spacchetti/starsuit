// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["740586444"] = [{"values":[{"sourceSpan":{"start":[145,1],"name":".spago/string-parsers/v6.0.0/src/Text/Parsing/StringParser/Combinators.purs","end":[145,61]},"score":3,"packageInfo":{"values":["string-parsers"],"tag":"Package"},"name":"choice","moduleName":"Text.Parsing.StringParser.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","StringParser"],"Parser"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Text","Parsing","StringParser"],"Parser"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parse using any of a collection of parsers.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[147,1],"name":".spago/sodium/v2.1.0/src/Stream.purs","end":[147,74]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"execute","moduleName":"SodiumFRP.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["str",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs the side effects as a map over stream events\nThis is a safe thing to do in Sodium\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":".spago/sodium/v2.1.0/src/Operational.purs","end":[50,71]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"split","moduleName":"SodiumFRP.Operational","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["str",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Push each event in the list onto a newly created transaction guaranteed\nto come before the next externally initiated transaction. Note that the semantics\nare such that two different invocations of split() can put events into the same\nnew transaction, so the resulting stream's events could be simultaneous with\nevents output by split() or 'defer' invoked elsewhere in the code.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,1],"name":".spago/sodium/v2.1.0/src/Cell.purs","end":[75,72]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"switchS","moduleName":"SodiumFRP.Cell","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["cel",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumCell"],"constraintArgs":[{"tag":"TypeVar","contents":"cel"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"cel"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[148,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set.purs","end":[148,64]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"unions","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Form the union of a collection of sets\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashSet.purs","end":[133,77]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"unions","moduleName":"Data.HashSet","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashSet"],"HashSet"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashSet"],"HashSet"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Union a collection of sets.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/filterable/v4.0.0/src/Data/Compactable.purs","end":[74,21]},"score":1,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"compactDefault","moduleName":"Data.Compactable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Compactable"],"Compactable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[67,3],"name":".spago/filterable/v4.0.0/src/Data/Compactable.purs","end":[68,23]},"score":1,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"compact","moduleName":"Data.Compactable","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Compactable"],"Compactable"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Compactable"],"Compactable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/concur-core/v0.4.2/src/Control/MultiAlternative.purs","end":[22,6]},"score":1,"packageInfo":{"values":["concur-core"],"tag":"Package"},"name":"defaultOrr","moduleName":"Control.MultiAlternative","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Plus"],"Plus"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/concur-core/v0.4.2/src/Control/MultiAlternative.purs","end":[15,38]},"score":1,"packageInfo":{"values":["concur-core"],"tag":"Package"},"name":"orr","moduleName":"Control.MultiAlternative","info":{"values":[{"typeClassArguments":[["m",null]],"typeClass":[["Control","MultiAlternative"],"MultiAlternative"],"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","MultiAlternative"],"MultiAlternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[115,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Rec/Loops.purs","end":[115,60]},"score":0,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"unfoldM_","moduleName":"Control.Monad.Rec.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The supplied Maybe expression will be repeatedly called until it\nreturns Nothing.  All values returned are discarded.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[99,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Rec/Loops.purs","end":[99,58]},"score":0,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"untilJust","moduleName":"Control.Monad.Rec.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run the supplied \"Maybe\" computation repeatedly until it returns a\nvalue.  Returns that value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[154,1],"name":".spago/tailrec/v5.0.0/src/Control/Monad/Rec/Class.purs","end":[154,58]},"score":20,"packageInfo":{"values":["tailrec"],"tag":"Package"},"name":"untilJust","moduleName":"Control.Monad.Rec.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Supplied computation will be executed repeatedly until it evaluates\nto `Just value` and then that `value` will be returned.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[147,1],"name":".spago/tailrec/v5.0.0/src/Control/Monad/Rec/Class.purs","end":[147,70]},"score":20,"packageInfo":{"values":["tailrec"],"tag":"Package"},"name":"whileJust","moduleName":"Control.Monad.Rec.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"While supplied computation evaluates to `Just _`, it will be\nexecuted repeatedly and results will be combined using monoid instance.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[124,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Loops.purs","end":[124,57]},"score":0,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"unfoldM_","moduleName":"Control.Monad.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The supplied Maybe expression will be repeatedly called until it\nreturns Nothing.  All values returned are discarded.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/monad-loops/v0.5.0/src/Control/Monad/Loops.purs","end":[107,55]},"score":0,"packageInfo":{"values":["monad-loops"],"tag":"Package"},"name":"untilJust","moduleName":"Control.Monad.Loops","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run the supplied Maybe computation repeatedly until it returns a\nvalue.  Returns that value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[114,1],"name":".spago/gen/v3.0.0/src/Control/Monad/Gen.purs","end":[114,71]},"score":11,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"filtered","moduleName":"Control.Monad.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that repeatedly run another generator until it produces\n`Just` node. This will never halt if the input generator always produces `Nothing`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/prelude/v5.0.0/src/Control/Bind.purs","end":[117,45]},"score":177,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"join","moduleName":"Control.Bind","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Bind"],"Bind"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Collapse two applications of a monadic type constructor into one.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/DOM.purs","end":[62,65]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"ElLeaf","moduleName":"Concur.React.DOM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Concur","Core","LiftWidget"],"LiftWidget"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Concur","React"],"HTML"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","React","Props"],"ReactProps"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/DOM.purs","end":[59,85]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"El'","moduleName":"Concur.React.DOM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","MultiAlternative"],"MultiAlternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","ShiftMap"],"ShiftMap"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","Core","Types"],"Widget"]},{"tag":"TypeConstructor","contents":[["Concur","React"],"HTML"]}]}},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]