// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2135780628"] = [{"values":[{"sourceSpan":{"start":[174,1],"name":".spago/react-halo/v2.0.0/src/React/Halo/Internal/Control.purs","end":[174,118]},"score":0,"packageInfo":{"values":["react-halo"],"tag":"Package"},"name":"fork","moduleName":"React.Halo.Internal.Control","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"ForAll","contents":["ctx",{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Control"],"HaloM"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"ctx"}]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Control"],"HaloM"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"ctx"}]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Types"],"ForkId"]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Start a `HaloM` process running independantly from the current \"thread\". Forks are tracked automatically and\nkilled when the `Finalize` event occurs (when the component unmounts). New forks can still be created during the\n`Finalize` event, but once evaluation ends there will be no way of killing them.\n\nReturns a `ForkId` for the new process.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/halogen/v6.1.2/src/Halogen/Query/HalogenM.purs","end":[215,133]},"score":7,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"fork","moduleName":"Halogen.Query.HalogenM","info":{"values":[{"type":{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"ForkId"]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Starts a `HalogenM` process running independent from the current `eval`\n\"thread\".\n\nA commonly use case for `fork` is in component initializers where some\nasync action is started. Normally all interaction with the component will\nbe blocked until the initializer completes, but if the async action is\n`fork`ed instead, the initializer can complete synchronously while the\nasync action continues.\n\nSome care needs to be taken when using a `fork` that can modify the\ncomponent state, as it's easy for the forked process to \"clobber\" the state\n(overwrite some or all of it with an old value) by mistake.\n\nWhen a component is disposed of any active forks will automatically\nbe killed. New forks can be started during finalization but there will be\nno means of killing them.\n"}],"tag":"SearchResult"}]