// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["809968171"] = [{"values":[{"sourceSpan":{"start":[164,1],"name":".spago/react-halo/v1.0.0/src/React/Halo/Internal/Control.purs","end":[164,106]},"score":0,"packageInfo":{"values":["react-halo"],"tag":"Package"},"name":"fork","moduleName":"React.Halo.Internal.Control","info":{"values":[{"type":{"tag":"ForAll","contents":["props",{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Control"],"HaloM"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Control"],"HaloM"]},{"tag":"TypeVar","contents":"props"}]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["React","Halo","Internal","Types"],"ForkId"]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Start a `HaloM` process running independantly from the current \"thread\". Forks are tracked automatically and\nkilled when the `Finalize` event occurs (when the component unmounts). New forks can still be created during the\n`Finalize` event, but once evaluation ends there will be no way of killing them.\n\nReturns a `ForkId` for the new process.\n"}],"tag":"SearchResult"}]