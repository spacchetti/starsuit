// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2135780628"] = [{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/halogen/v6.1.0/src/Halogen/Query/HalogenM.purs","end":[215,133]},"score":5,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"fork","moduleName":"Halogen.Query.HalogenM","info":{"values":[{"type":{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"ForkId"]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Starts a `HalogenM` process running independent from the current `eval`\n\"thread\".\n\nA commonly use case for `fork` is in component initializers where some\nasync action is started. Normally all interaction with the component will\nbe blocked until the initializer completes, but if the async action is\n`fork`ed instead, the initializer can complete synchronously while the\nasync action continues.\n\nSome care needs to be taken when using a `fork` that can modify the\ncomponent state, as it's easy for the forked process to \"clobber\" the state\n(overwrite some or all of it with an old value) by mistake.\n\nWhen a component is disposed of any active forks will automatically\nbe killed. New forks can be started during finalization but there will be\nno means of killing them.\n"}],"tag":"SearchResult"}]