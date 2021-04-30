// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1168945363"] = [{"values":[{"sourceSpan":{"start":[166,1],"name":".spago/halogen-select/v6.0.0/src/Select.purs","end":[168,44]},"score":0,"packageInfo":{"values":["halogen-select"],"tag":"Package"},"name":"defaultSpec","moduleName":"Select","info":{"values":[{"type":{"tag":"ForAll","contents":["st",{"tag":"ForAll","contents":["query",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["input",{"tag":"ForAll","contents":["msg",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Select"],"Spec"]},{"tag":"TypeVar","contents":"st"}]},{"tag":"TypeVar","contents":"query"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeVar","contents":"msg"}]},{"tag":"TypeVar","contents":"m"}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[152,1],"name":".spago/halogen/v6.1.2/src/Halogen/Component.purs","end":[152,112]},"score":6,"packageInfo":{"values":["halogen"],"tag":"Package"},"name":"defaultEval","moduleName":"Halogen.Component","info":{"values":[{"type":{"tag":"ForAll","contents":["state",{"tag":"ForAll","contents":["query",{"tag":"ForAll","contents":["action",{"tag":"ForAll","contents":["slots",{"tag":"ForAll","contents":["input",{"tag":"ForAll","contents":["output",{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Halogen","Component"],"EvalSpec"]},{"tag":"TypeVar","contents":"state"}]},{"tag":"TypeVar","contents":"query"}]},{"tag":"TypeVar","contents":"action"}]},{"tag":"TypeVar","contents":"slots"}]},{"tag":"TypeVar","contents":"input"}]},{"tag":"TypeVar","contents":"output"}]},{"tag":"TypeVar","contents":"m"}]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default value for `mkEval` that will result in an `eval` that nothing at\nall - all incoming actions and queries will be ignored, and no receiver,\ninitializer, or finalizer will be specified.\n\nUsually this will be used with record update syntax to override fields to\nspecify things as needed. If a component only needs to handle actions,\nfor instance, a usage might be something like this:\n\n```purescript\nH.mkComponent\n  { initialState\n  , render\n  , eval: H.mkEval (H.defaultEval { handleAction = ?handleAction })\n  }\n```\n"}],"tag":"SearchResult"}]