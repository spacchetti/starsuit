// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63006786"] = [{"values":[{"sourceSpan":{"start":[206,1],"name":".spago/halogen-hooks/v0.4.2/src/Halogen/Hooks.purs","end":[206,58]},"score":0,"packageName":"halogen-hooks","name":"useRef","moduleName":"Halogen.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Hook"],"Hook"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks"],"UseRef"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Ref"],"Ref"]},{"tag":"TypeVar","contents":"a"}]}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A Hook providing the ability to use a mutable reference.\n\nThis Hook returns the value of the mutable reference at the time the Hook\nwas run, and the reference itself which can be read at any time. The value\nof the reference can be used for rendering, but any effectful computations\nin `HookM` should read the value of the reference to guarantee an up-to-date\nvalue.\n\n```purs\nvalue /\\ ref <- Hooks.useRef initialValue\n\n-- Read and write the ref in effectful code\nHooks.captures {} Hooks.useTickEffect do\n  current <- liftEffect $ Ref.read ref\n  -- ... use the current value\n\n-- Use the last-read value directly in render code\nHooks.pure $ HH.text (show value)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":".spago/halogen-hooks/v0.4.2/src/Halogen/Hooks.purs","end":[76,54]},"score":0,"packageName":"halogen-hooks","name":"useState","moduleName":"Halogen.Hooks","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Hook"],"Hook"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks"],"UseState"]},{"tag":"TypeVar","contents":"state"}]}}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"state"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Types"],"StateId"]},{"tag":"TypeVar","contents":"state"}]}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A Hook providing an independent state and a unique identifier usable with\nthe state functions `get`, `put`, `modify`, and `modify_` to update the state.\n\n```purs\nHooks.do\n  -- Create a new state with `useState`\n  state /\\ stateId <- Hooks.useState 0\n\n  -- Perform state updates in `HookM`\n  let\n    update :: HookM m Unit\n    update =\n      Hooks.modify_ stateId \\st -> st + 10\n```\n"}],"tag":"SearchResult"}]