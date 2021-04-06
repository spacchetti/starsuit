// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["673483497"] = [{"values":[{"sourceSpan":{"start":[98,1],"name":".spago/spec/v5.0.0/src/Test/Spec/Assertions.purs","end":[102,12]},"score":26,"packageInfo":{"values":["spec"],"tag":"Package"},"name":"expectError","moduleName":"Test.Spec.Assertions","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Error","Class"],"MonadError"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[16,1],"name":".spago/quickcheck-laws/v6.0.0/src/Test/QuickCheck/Laws/Data/FunctorWithIndex.purs","end":[23,16]},"score":13,"packageInfo":{"values":["quickcheck-laws"],"tag":"Package"},"name":"checkFunctorWithIndex","moduleName":"Test.QuickCheck.Laws.Data.FunctorWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["i",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FunctorWithIndex"],"FunctorWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Arbitrary"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Laws"],"A"]}]}}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck","Arbitrary"],"Coarbitrary"],"constraintArgs":[{"tag":"TypeVar","contents":"i"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Laws"],"A"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy2"]},{"tag":"TypeVar","contents":"f"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"- Identity: `mapWithIndex (\\_ a → a) = identity`\n- Composition: `mapWithIndex f . mapWithIndex g = mapWithIndex (\\i → f i <<< g i)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/sodium/v2.1.0/src/Stream.purs","end":[136,62]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"once","moduleName":"SodiumFRP.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["str",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Return a stream that outputs only one value: the next event of the\ninput stream, starting from the transaction in which once() was invoked.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/sodium/v2.1.0/src/Operational.purs","end":[42,63]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"defer","moduleName":"SodiumFRP.Operational","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["str",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumStream"],"constraintArgs":[{"tag":"TypeVar","contents":"str"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"str"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Push each event onto a new transaction guaranteed to come before the next externally\ninitiated transaction. Same as 'split' but it works on a single value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,1],"name":".spago/sodium/v2.1.0/src/Operational.purs","end":[26,63]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"updates","moduleName":"SodiumFRP.Operational","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["cel",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumCell"],"constraintArgs":[{"tag":"TypeVar","contents":"cel"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"cel"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["SodiumFRP","Class"],"Stream"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A stream that gives the updates/steps for a 'Cell' \n\nThis is an OPERATIONAL primitive, which is not part of the main Sodium API. \nIt breaks the property of non-detectability of cell steps/updates.\nThe rule with this primitive is that you should only use it in functions\nthat do not allow the caller to detect the cell updates.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/sodium/v2.1.0/src/Cell.purs","end":[35,62]},"score":0,"packageInfo":{"values":["sodium"],"tag":"Package"},"name":"sample","moduleName":"SodiumFRP.Cell","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["cel",{"tag":"ConstrainedType","contents":[{"constraintClass":[["SodiumFRP","Class"],"SodiumCell"],"constraintArgs":[{"tag":"TypeVar","contents":"cel"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"cel"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sample \n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,1],"name":".spago/node-buffer/v7.0.0/src/Node/Buffer/Internal.purs","end":[102,43]},"score":14,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"concat","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"buf"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/node-buffer/v7.0.0/src/Node/Buffer/Internal.purs","end":[56,59]},"score":14,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"fromArray","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Types"],"Octet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,3],"name":".spago/node-buffer/v7.0.0/src/Node/Buffer/Class.purs","end":[104,31]},"score":14,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"concat","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"buf"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Concatenates a list of buffers.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,3],"name":".spago/node-buffer/v7.0.0/src/Node/Buffer/Class.purs","end":[58,36]},"score":14,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"fromArray","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Types"],"Octet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates a new buffer from an array of octets, sized to match the array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[300,1],"name":".spago/grain/v1.0.0/src/Grain/UI.purs","end":[304,14]},"score":1,"packageInfo":{"values":["grain"],"tag":"Package"},"name":"useValue","moduleName":"Grain.UI","info":{"values":[{"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Grain","Class"],"NonKeyedGrain"],"constraintArgs":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Grain","UI"],"Render"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Listen a state, then return it.\n\nIf the state is changed, the component will be rerendered.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,3],"name":".spago/grain/v1.0.0/src/Grain/Class.purs","end":[13,34]},"score":1,"packageInfo":{"values":["grain"],"tag":"Package"},"name":"initialState","moduleName":"Grain.Class","info":{"values":[{"typeClassArguments":[["p",null],["a",null]],"typeClass":[["Grain","Class"],"Grain"],"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Grain","Class"],"Grain"],"constraintArgs":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[16,3],"name":".spago/effect/v3.0.0/src/Effect/Class.purs","end":[16,42]},"score":142,"packageInfo":{"values":["effect"],"tag":"Package"},"name":"liftEffect","moduleName":"Effect.Class","info":{"values":[{"typeClassArguments":[["m",null]],"typeClass":[["Effect","Class"],"MonadEffect"],"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,1],"name":".spago/unfoldable/v5.0.0/src/Data/Unfoldable.purs","end":[102,56]},"score":19,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"fromMaybe","moduleName":"Data.Unfoldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a Maybe to any Unfoldable, such as lists or arrays.\n\n``` purescript\nfromMaybe (Nothing :: Maybe Int) == []\nfromMaybe (Just 1) == [1]\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set.purs","end":[61,57]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a set to an unfoldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set.purs","end":[57,64]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"fromFoldable","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a set from a foldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[92,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set/NonEmpty.purs","end":[92,67]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"toUnfoldable1","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a set to a non-empty unfoldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set/NonEmpty.purs","end":[88,65]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a set to an unfoldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,1],"name":".spago/ordered-collections/v2.0.0/src/Data/Set/NonEmpty.purs","end":[79,74]},"score":20,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"fromFoldable1","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a set from a non-empty foldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[170,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashSet.purs","end":[170,61]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Data.HashSet","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashSet"],"HashSet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Turn a set into an unfoldable functor.\n\nYou probably want to use `toArray` instead, especially if you\nwant to get an array out.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/unordered-collections/v2.1.0/src/Data/HashSet.purs","end":[94,73]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"fromFoldable","moduleName":"Data.HashSet","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashSet"],"HashSet"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a set from a foldable structure.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/prelude/v5.0.0/src/Data/Functor.purs","end":[63,47]},"score":178,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"void","moduleName":"Data.Functor","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The `void` function is used to ignore the type wrapped by a\n[`Functor`](#functor), replacing it with `Unit` and keeping only the type\ninformation provided by the type constructor itself.\n\n`void` is often useful when using `do` notation to change the return type\nof a monadic computation:\n\n```purescript\nmain = forE 1 10 \\n -> void do\n  print n\n  print (n * n)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[445,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[445,61]},"score":55,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"minimum","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the smallest element of a structure, according to its `Ord` instance.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[432,1],"name":".spago/foldable-traversable/v5.0.0/src/Data/Foldable.purs","end":[432,61]},"score":55,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"maximum","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the largest element of a structure, according to its `Ord` instance.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[101,1],"name":".spago/catenable-lists/v6.0.0/src/Data/CatQueue.purs","end":[101,60]},"score":2,"packageInfo":{"values":["catenable-lists"],"tag":"Package"},"name":"fromFoldable","moduleName":"Data.CatQueue","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","CatQueue"],"CatQueue"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert any `Foldable` into a `CatQueue`.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[189,1],"name":".spago/arrays/v6.0.0/src/Data/Array/NonEmpty.purs","end":[189,69]},"score":51,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"toUnfoldable1","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[186,1],"name":".spago/arrays/v6.0.0/src/Data/Array/NonEmpty.purs","end":[186,67]},"score":51,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"toUnfoldable","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[183,1],"name":".spago/arrays/v6.0.0/src/Data/Array/NonEmpty.purs","end":[183,67]},"score":51,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"fromFoldable1","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/Props.purs","end":[91,52]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"style","moduleName":"Concur.React.Props","info":{"values":[{"type":{"tag":"ForAll","contents":["style",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"style"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","React","Props"],"ReactProps"]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/Props.purs","end":[88,60]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"_data","moduleName":"Concur.React.Props","info":{"values":[{"type":{"tag":"ForAll","contents":["dataAttrs",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"dataAttrs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","React","Props"],"ReactProps"]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/concur-react/v0.4.2/src/Concur/React/Props.purs","end":[85,15]},"score":0,"packageInfo":{"values":["concur-react"],"tag":"Package"},"name":"aria","moduleName":"Concur.React.Props","info":{"values":[{"type":{"tag":"ForAll","contents":["ariaAttrs",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"ariaAttrs"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","React","Props"],"ReactProps"]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]