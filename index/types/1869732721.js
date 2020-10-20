// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1869732721"] = [{"values":[{"sourceSpan":{"start":[87,1],"name":".spago/halogen/v5.1.0/src/Halogen/Query/EventSource.purs","end":[91,21]},"score":12,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"effectEventSource","moduleName":"Halogen.Query.EventSource","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Aff","Class"],"MonadAff"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"Emitter"]},{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"Finalizer"]},{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]}]}}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"EventSource"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs an event source from a setup function that operates in `Eff`.\n\n- The `Emitter` that the passed function receives is used to `emit` actions\n  that will be received by the current component, or can be `close`d to\n  shut down the event source and remove the subscription.\n- The `Finalizer` that the passed function produces is there to allow for\n  some clean-up action to be taken when the event source is unsubscribed\n  from. This also runs if the `Emitter` is `close`d. `mempty` can be used\n  here if there is no clean-up to perform.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,1],"name":".spago/halogen/v5.1.0/src/Halogen/Query/EventSource.purs","end":[62,21]},"score":12,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"affEventSource","moduleName":"Halogen.Query.EventSource","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Aff","Class"],"MonadAff"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"Emitter"]},{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"Finalizer"]},{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]}]}}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Query","EventSource"],"EventSource"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs an event source from a setup function that operates in `Aff`.\n\n- The `Emitter` that the passed function receives is used to `emit` actions\n  that will be received by the current component, or can be `close`d to\n  shut down the event source and remove the subscription.\n- The `Finalizer` that the passed function produces is there to allow for\n  some clean-up action to be taken when the event source is unsubscribed\n  from. This also runs if the `Emitter` is `close`d. `mempty` can be used\n  here if there is no clean-up to perform.\n"}],"tag":"SearchResult"}]