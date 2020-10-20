// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["306104540"] = [{"values":[{"sourceSpan":{"start":[183,1],"name":".spago/halogen/v5.1.0/src/Halogen/Query/HalogenM.purs","end":[183,139]},"score":12,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"subscribe'","moduleName":"Halogen.Query.HalogenM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["state",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"SubscriptionId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"EventSource"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"action"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"HalogenM"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An alternative to `subscribe`, intended for subscriptions that unsubscribe\nthemselves. Instead of returning the `SubscriptionId` from `subscribe'`, it\nis passed into an `EventSource` constructor. This allows emitted queries\nto include the `SubscriptionId`, rather than storing it in the state of the\ncomponent.\n\nWhen a component is disposed of any active subscriptions will automatically\nbe stopped and no further subscriptions will be possible during\nfinalization.\n"}],"tag":"SearchResult"}]