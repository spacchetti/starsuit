// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["795693385"] = [{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/halogen-hooks-extra/v0.7.1/src/Halogen/Hooks/Extra/Hooks/UseStateFn.purs","end":[114,61]},"score":0,"packageInfo":{"values":["halogen-hooks-extra"],"tag":"Package"},"name":"useModifyState","moduleName":"Halogen.Hooks.Extra.Hooks.UseStateFn","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Hook"],"Hook"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Extra","Hooks","UseStateFn"],"UseStateFn"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Just like `useState`, but provides a convenience function for updating\nstate, rather than a state index to pass to `Hooks.modify`.\n\nExample:\n```\ncount /\\ modifyCount <- useModifyState 42\n-- ...\nnewCount <- modifyCount (add 1)\n```\n\nInstead of:\n```\ncount /\\ countIdx <- Hooks.useState 42\n-- ...\nnewCount <- Hooks.modify countIdx (add 1)\n```\n\nShorthand for:\n```\nuseStateFn Hooks.modify\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[82,1],"name":".spago/halogen-hooks-extra/v0.7.1/src/Halogen/Hooks/Extra/Hooks/UseStateFn.purs","end":[85,64]},"score":0,"packageInfo":{"values":["halogen-hooks-extra"],"tag":"Package"},"name":"useModifyState_","moduleName":"Halogen.Hooks.Extra.Hooks.UseStateFn","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Hook"],"Hook"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","Extra","Hooks","UseStateFn"],"UseStateFn"]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]}}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Just like `useState`, but provides a convenience function for updating\nstate, rather than a state index to pass to `Hooks.modify_`.\n\nExample:\n```\ncount /\\ modifyCount <- useModifyState_ 42\n-- ...\nmodifyCount (add 1)\n```\n\nInstead of:\n```\ncount /\\ countIdx <- Hooks.useState 42\n-- ...\nHooks.modify_ countIdx (add 1)\n```\n\nShorthand for:\n```\nuseStateFn Hooks.modify_\n```\n\n"}],"tag":"SearchResult"}]