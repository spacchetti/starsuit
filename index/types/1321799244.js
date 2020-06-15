// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1321799244"] = [{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/spork/v1.0.0/src/Spork/Batch.purs","end":[23,30]},"score":0,"packageName":"spork","name":"lift","moduleName":"Spork.Batch","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Spork","Batch"],"Batch"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lifts a singleton effect/subscription into `Batch`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[112,1],"name":".spago/react-basic-hooks/v5.2.0/src/React/Basic/Hooks/Internal.purs","end":[114,29]},"score":0,"packageName":"react-basic-hooks","name":"unsafeHook","moduleName":"React.Basic.Hooks.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["newHook",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Hook"]},{"tag":"TypeVar","contents":"newHook"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Promote an arbitrary Effect to a Hook.\n\nThis is unsafe because it allows arbitrary\neffects to be performed during a render, which\nmay cause them to be run many times by React.\nThis function is primarily for constructing\nnew hooks using the FFI. If you just want to\nalias a safe hook's effects, prefer `coerceHook`.\n\nIt's also unsafe because the author of the hook\ntype (the `newHook` type variable used here) _MUST_\ncontain all relevant types. For example, `UseState`\nhas a phantom type to track the type of the value contained.\n`useEffect` tracks the type used as the deps. `useAff` tracks\nboth the deps and the resulting response's type. Forgetting\nto do this allows the consumer to reorder hook effects. If\n`useState` didn't track the return type the following\nextremely unsafe code would be allowed:\n\n```purs\nReact.do\n  if xyz then\n    _ <- useState 0\n    useState Nothing\n  else\n    s <- useState Nothing\n    _ <- useState 0\n    pure s\n  ...\n```\n\nThe same applies to keys as they use `Eq` and a reorder\nwould allow React to pass incorrect types into the `eq`\nfunction!\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[250,1],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Builder.purs","end":[250,70]},"score":0,"packageName":"optparse","name":"completeWith","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasCompleter"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add a list of possible completion values.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[191,1],"name":".spago/optparse/v3.0.1/src/Options/Applicative/Builder.purs","end":[191,44]},"score":0,"packageName":"optparse","name":"helpDoc","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify the help text for an option as a 'Text.PrettyPrint.ANSI.Leijen.Doc'\nvalue.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/remotedata/v4.2.0/src/Network/RemoteData.purs","end":[129,51]},"score":0,"packageName":"remotedata","name":"fromMaybe","moduleName":"Network.RemoteData","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Network","RemoteData"],"RemoteData"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Convert a `Maybe` to `RemoteData`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[112,1],"name":".spago/halogen-hooks/v0.4.2/src/Halogen/Hooks/HookM.purs","end":[112,54]},"score":0,"packageName":"halogen-hooks","name":"get","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Types"],"StateId"]},{"tag":"TypeVar","contents":"state"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"state"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get a piece of state using an identifier received from the `useState` hook.\n\n```purs\n_ /\\ countId :: StateId Int <- Hooks.useState 0\n\nlet\n  onClick = do\n    count :: Int <- Hooks.get countId\n    ...\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":".spago/free/v5.2.0/src/Data/Yoneda.purs","end":[63,57]},"score":0,"packageName":"free","name":"liftYoneda","moduleName":"Data.Yoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Yoneda"],"Yoneda"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the `Functor` `f` to the `Functor` `Yoneda f`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/selection-foldable/v0.2.0/src/Data/SelectionFoldable.purs","end":[38,71]},"score":0,"packageName":"selection-foldable","name":"fromFoldable","moduleName":"Data.SelectionFoldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","SelectionFoldable"],"SelectionFoldable"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/machines/v5.1.0/src/Data/Machine/Mealy.purs","end":[71,53]},"score":0,"packageName":"machines","name":"source","moduleName":"Data.Machine.Mealy","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"s"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Machine","Mealy"],"Source"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"s"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[115,1],"name":".spago/transformers/v4.2.0/src/Control/Monad/List/Trans.purs","end":[115,60]},"score":0,"packageName":"transformers","name":"fromEffect","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a computation from the base functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,1],"name":".spago/errors/v4.1.0/src/Control/Error/Util.purs","end":[45,59]},"score":0,"packageName":"errors","name":"hoistMaybe","moduleName":"Control.Error.Util","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Maybe","Trans"],"MaybeT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a `Maybe` to the `MaybeT` monad\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/freeap/v5.0.1/src/Control/Applicative/Free.purs","end":[31,44]},"score":0,"packageName":"freeap","name":"liftFreeAp","moduleName":"Control.Applicative.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Applicative","Free"],"FreeAp"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` into\nthe free applicative functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/concur-core/v0.4.2/src/Concur/Core/Types.purs","end":[218,13]},"score":0,"packageName":"concur-core","name":"effAction","moduleName":"Concur.Core.Types","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","Core","Types"],"Widget"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]