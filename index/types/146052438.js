// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["146052438"] = [{"values":[{"sourceSpan":{"start":[239,1],"name":".spago/halogen-hooks/v0.1.0/src/Halogen/Hooks/HookM.purs","end":[239,66]},"score":0,"packageName":"halogen-hooks","name":"fork","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["o",{"tag":"ForAll","contents":["ps",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"ps"}]},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"ps"}]},{"tag":"TypeVar","contents":"o"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"ForkId"]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Starts a `HalogenM` process running independent from the current `eval`\n\"thread\".\n\nA commonly use case for `fork` is in component initializers where some\nasync action is started. Normally all interaction with the component will\nbe blocked until the initializer completes, but if the async action is\n`fork`ed instead, the initializer can complete synchronously while the\nasync action continues.\n\nSome care needs to be taken when using a `fork` that can modify the\ncomponent state, as it's easy for the forked process to \"clobber\" the state\n(overwrite some or all of it with an old value) by mistake.\n\nWhen a component is disposed of any active forks will automatically\nbe killed. New forks can be started during finalization but there will be\nno means of killing them.\n"}],"tag":"SearchResult"}]