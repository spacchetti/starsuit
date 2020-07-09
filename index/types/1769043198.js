// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1769043198"] = [{"values":[{"sourceSpan":{"start":[247,1],"name":".spago/react-basic-hooks/v6.0.0/src/React/Basic/Hooks.purs","end":[251,68]},"score":0,"packageName":"react-basic-hooks","name":"useReducer","moduleName":"React.Basic.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks"],"Reducer"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Hook"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks"],"UseReducer"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"state"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Use `mkReducer` to construct a reducer function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[78,1],"name":".spago/react-basic-hooks/v6.0.0/src/React/Basic/Hooks/Aff.purs","end":[82,71]},"score":0,"packageName":"react-basic-hooks","name":"useAffReducer","moduleName":"React.Basic.Hooks.Aff","info":{"values":[{"type":{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Aff"],"AffReducer"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Internal"],"Hook"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Basic","Hooks","Aff"],"UseAffReducer"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"state"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provide an initial state and a reducer function. This is a more powerful\nversion of `useReducer`, where a state change can additionally queue\nasynchronous operations. The results of those operations must be  mapped\ninto the reducer's `action` type. This is essentially the Elm architecture.\n\nGenerally, I recommend `useAff` paired with tools like `useResetToken` over\n`useAffReducer` as there are many ways `useAffReducer` can result in race\nconditions. `useAff` with proper dependency management will handle previous\nrequest cancellation and ensure your `Aff` result is always in sync with\nthe provided `deps`, for example. To accomplish the same thing with\n`useAffReducer` would require tracking `Fiber`s manually in your state\nsomehow.. :c\n\nThat said, `useAffReducer` can still be helpful when converting from the\ncurrent `React.Basic` (non-hooks) API or for those used to Elm.\n\n*Note: Aff failures are thrown. If you need to capture an error state, be\n  sure to capture it in your action type!*\n"}],"tag":"SearchResult"}]