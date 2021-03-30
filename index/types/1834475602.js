// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1834475602"] = [{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/spec-discovery/v6.0.0/src/Test/Spec/Discovery.purs","end":[14,26]},"score":6,"packageInfo":{"values":["spec-discovery"],"tag":"Package"},"name":"discover","moduleName":"Test.Spec.Discovery","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","Spec"],"Spec"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/avar/v4.0.0/src/Effect/Aff/AVar.purs","end":[24,28]},"score":9,"packageInfo":{"values":["avar"],"tag":"Package"},"name":"new","moduleName":"Effect.Aff.AVar","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","AVar"],"AVar"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a fresh AVar with an initial value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/concurrent-queues/v2.0.0/src/Concurrent/BoundedQueue.purs","end":[27,38]},"score":0,"packageInfo":{"values":["concurrent-queues"],"tag":"Package"},"name":"new","moduleName":"Concurrent.BoundedQueue","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concurrent","BoundedQueue","Internal"],"BoundedQueue"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a new `BoundedQueue` with the given capacity,\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[22,1],"name":".spago/concurrent-queues/v2.0.0/src/Concurrent/BoundedQueue/Sync.purs","end":[22,41]},"score":0,"packageInfo":{"values":["concurrent-queues"],"tag":"Package"},"name":"new","moduleName":"Concurrent.BoundedQueue.Sync","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concurrent","BoundedQueue","Internal"],"BoundedQueue"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Synchronously creates a new `BoundedQueue` with the given capacity.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/concur-core/v0.4.2/src/Concur/Core/DevTools.purs","end":[33,74]},"score":1,"packageInfo":{"values":["concur-core"],"tag":"Package"},"name":"subscribe","moduleName":"Concur.Core.DevTools","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Concur","Core","DevTools"],"DevToolsConnection"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Concur","Core","DevTools"],"StateSubscription"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/biscotti-session/v0.2.0/src/Biscotti/Session.purs","end":[27,91]},"score":1,"packageInfo":{"values":["biscotti-session"],"tag":"Package"},"name":"memoryStore","moduleName":"Biscotti.Session","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Biscotti","Session","Store"],"SessionStore"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/biscotti-session/v0.2.0/src/Biscotti/Session/Store/Memory.purs","end":[43,83]},"score":1,"packageInfo":{"values":["biscotti-session"],"tag":"Package"},"name":"new","moduleName":"Biscotti.Session.Store.Memory","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Decode","Class"],"DecodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Biscotti","Session","Store"],"SessionStore"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]