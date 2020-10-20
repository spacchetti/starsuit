// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["721700024"] = [{"values":[{"sourceSpan":{"start":[225,1],"name":".spago/halogen-hooks/v0.4.3/src/Halogen/Hooks/HookM.purs","end":[225,94]},"score":1,"packageInfo":{"values":["halogen-hooks"],"tag":"Package"},"name":"subscribe'","moduleName":"Halogen.Hooks.HookM","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Halogen","Query","HalogenM"],"SubscriptionId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"EventSource"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Hooks","HookM"],"HookM"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"An alternative to `subscribe`, intended for subscriptions that unsubscribe\nthemselves. Instead of returning the `SubscriptionId` from `subscribe'`, it\nis passed into an `EventSource` constructor. This allows emitted queries\nto include the `SubscriptionId`, rather than storing it in the state of the\ncomponent.\n\nWhen a component is disposed of any active subscriptions will automatically\nbe stopped and no further subscriptions will be possible during\nfinalization.\n"}],"tag":"SearchResult"}]