// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["52981797"] = [{"values":[{"sourceSpan":{"start":[328,1],"name":".spago/elmish/v0.3.1/src/Elmish/Component.purs","end":[332,20]},"score":1,"packageInfo":{"values":["elmish"],"tag":"Package"},"name":"wrapWithLocalState","moduleName":"Elmish.Component","info":{"values":[{"type":{"tag":"ForAll","contents":["args",{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["msg",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Elmish","Component"],"ComponentName"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"args"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Elmish","Component"],"ComponentDef"]},{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"state"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"args"}]},{"tag":"TypeConstructor","contents":[["Elmish","React"],"ReactElement"]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a React component that can be bound to a varying ComponentDef,\nreturns a function that performs the binding.\n\nNote 1: this function accepts an `Aff`-based ComponentDef, it cannot take\npolymorphic or custom monad. The superficial reason for this is that this\nfunction is intended to be used at top-level (see explanation below), where\ncontext for a custom monad is not available. A deeper reason is that this\nfunction creates a self-contained React component, and it is precisely\nbecause it is self-contained that it cannot be seamlessly included in an\nouter monadic computation.\n\nThis limitation forces such truly \"reusable\" components to be written in\nterms of `Aff` rather than a custom monad, which is actually a good thing.\nHowever, if it turns out that this component really needs to be in a custom\nmonad, it is always possible to convert it to `Aff` via the `nat` function.\n\nNote 2: in order to accomplish this, such aggregated component will store\nits state using the React facilities - i.e. via `this.setState` and\n`this.state`. While this is appropriate for most cases, it actually has\nproven to be fragile in some specific circumstances (e.g. multiple events\noccurring within the same JS synchronous frame), so it is not recommended\nto use this mechanism for complex components.\n"}],"tag":"SearchResult"}]