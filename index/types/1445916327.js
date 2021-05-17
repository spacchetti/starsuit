// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1445916327"] = [{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/react-basic/v16.0.0/src/React/Basic/Events.purs","end":[49,53]},"score":4,"packageInfo":{"values":["react-basic"],"tag":"Package"},"name":"unsafeEventFn","moduleName":"React.Basic.Events","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Events"],"EventFn"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely create an `EventFn`. This function should be avoided as it can allow\na `SyntheticEvent` to escape its scope. Accessing a React event's properties is only\nvalid in a synchronous event callback.\n\nInstead, use the helper functions specific to your platform, such as `React.Basic.DOM.Events`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Builder.purs","end":[218,47]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"style","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Apply a function to the option description in the usage text.\n\n> import Options.Applicative.Help\n> flag' () (short 't' <> style bold)\n\n**NOTE**: This builder is more flexible than its name and example\nallude. One of the motivating examples for its addition was to\nused `const` to completely replace the usage text of an option.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[178,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Builder.purs","end":[178,56]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"showDefaultWith","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Show the default value for this option using a function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[144,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Builder/Internal.purs","end":[144,69]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"optionMod","moduleName":"Options.Applicative.Builder.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"OptProperties"]}]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"OptProperties"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/halogen-store/v0.1.1/src/Halogen/Store/Select.purs","end":[24,69]},"score":0,"packageInfo":{"values":["halogen-store"],"tag":"Package"},"name":"selectEq","moduleName":"Halogen.Store.Select","info":{"values":[{"type":{"tag":"ForAll","contents":["store",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"store"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Store","Select"],"Selector"]},{"tag":"TypeVar","contents":"store"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a `Selector` from a function to select a sub-part of the store. The\nselector will use the `Eq` class to determine if the selected state has\nchanged.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[145,1],"name":".spago/sized-vectors/v5.0.2/src/Data/Vec.purs","end":[145,51]},"score":1,"packageInfo":{"values":["sized-vectors"],"tag":"Package"},"name":"fill","moduleName":"Data.Vec","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Vec"],"Vec"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"fill vec using a function which is given indices\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/profunctor-lenses/v7.0.1/src/Data/Lens/Iso/Newtype.purs","end":[18,56]},"score":12,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"unto","moduleName":"Data.Lens.Iso.Newtype","info":{"values":[{"type":{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["o",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"n"},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeVar","contents":"n"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Iso'"]},{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeVar","contents":"o"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A variant of `_Newtype` which takes the constructor as an argument\nand infers its inverse.\n\nThis is useful as an aid to type inference in certain situations.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/functions/v5.0.0/src/Data/Function/Uncurried.purs","end":[62,41]},"score":39,"packageInfo":{"values":["functions"],"tag":"Package"},"name":"mkFn1","moduleName":"Data.Function.Uncurried","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Function","Uncurried"],"Fn1"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a function of one argument\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/logging/v3.0.0/src/Control/Logger/Console.purs","end":[13,22]},"score":0,"packageInfo":{"values":["logging"],"tag":"Package"},"name":"console","moduleName":"Control.Logger.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Logger"],"Logger"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Logger that logs records to the console.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/open-folds/v6.3.0/src/Control/Fold.purs","end":[136,60]},"score":0,"packageInfo":{"values":["open-folds"],"tag":"Package"},"name":"all","moduleName":"Control.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Fold"],"Fold"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Fold` which tests if _all_ of its inputs satisfy some predicate\n(generalized to work with an arbitrary `HeytingAlgebra`).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[141,1],"name":".spago/open-folds/v6.3.0/src/Control/Fold.purs","end":[141,60]},"score":0,"packageInfo":{"values":["open-folds"],"tag":"Package"},"name":"any","moduleName":"Control.Fold","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Fold"],"Fold"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Fold` which tests if _any_ of its inputs satisfy some predicate\n(generalized to work with an arbitrary `HeytingAlgebra`).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/transformers/v5.1.0/src/Control/Comonad/Traced.purs","end":[28,45]},"score":46,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"traced","moduleName":"Control.Comonad.Traced","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Traced"],"Traced"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a value in context in the `Traced` comonad.\n"}],"tag":"SearchResult"}]