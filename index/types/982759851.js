// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["982759851"] = [{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/react-basic-hooks/v6.0.0/src/React/Basic/Hooks/Internal.purs","end":[75,25]},"score":0,"packageName":"react-basic-hooks","name":"coerceHook","moduleName":"React.Basic.Hooks.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["newHook",{"tag":"ForAll","contents":["oldHook",{"tag":"ForAll","contents":["hooks",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Newtype"],"Newtype"],"constraintArgs":[{"tag":"TypeVar","contents":"newHook"},{"tag":"TypeVar","contents":"oldHook"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Render"]},{"tag":"TypeVar","contents":"hooks"}]},{"tag":"TypeVar","contents":"oldHook"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Render"]},{"tag":"TypeVar","contents":"hooks"}]},{"tag":"TypeVar","contents":"newHook"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Rename/alias a chain of hooks. Useful for exposing a single\n\"clean\" type when creating a hook to improve error messages\nand hide implementation details, particularly for libraries\nhiding internal info.\n\nFor example, the following alias is technically correct but\nwhen inspecting types or error messages the alias is expanded\nto the full original type and `UseAff` is never seen:\n\n```purs\ntype UseAff deps a hooks\n  = UseEffect deps (UseState (Result a) hooks)\n\nuseAff :: ... -> Hook (UseAff deps a) (Result a)\nuseAff deps aff = React.do\n  ...\n```\n\n`coerceHook` allows the same code to safely export a newtype\ninstead, hiding the internal implementation:\n\n```purs\nnewtype UseAff deps a hooks\n  = UseAff (UseEffect deps (UseState (Result a) hooks))\n\nderive instance ntUseAff :: Newtype (UseAff deps a hooks) _\n\nuseAff :: ... -> Hook (UseAff deps a) (Result a)\nuseAff deps aff = coerceHook React.do\n  ...\n```\n\n\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,3],"name":".spago/polyform/v0.8.2/src/Polyform/Dual/Generic/Sum.purs","end":[54,54]},"score":0,"packageName":"polyform","name":"gDualCtr","moduleName":"Polyform.Dual.Generic.Sum","info":{"values":[{"typeClassArguments":[["p",null],["i",null],["o",null],["o'",null]],"typeClass":[["Polyform","Dual","Generic","Sum"],"GDualCtr"],"type":{"tag":"ForAll","contents":["p",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["o",{"tag":"ForAll","contents":["o'",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Polyform","Dual","Generic","Sum"],"GDualCtr"],"constraintArgs":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"o"},{"tag":"TypeVar","contents":"o'"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Polyform","Dual"],"Dual"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Polyform","Dual"],"Dual"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o'"}]}]}]}]},null]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[8,1],"name":".spago/indexed-monad/v1.2.0/src/Data/Functor/Indexed.purs","end":[8,54]},"score":0,"packageName":"indexed-monad","name":"ivoid","moduleName":"Data.Functor.Indexed","info":{"values":[{"type":{"tag":"ForAll","contents":["y",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Indexed"],"IxFunctor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeVar","contents":"y"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]