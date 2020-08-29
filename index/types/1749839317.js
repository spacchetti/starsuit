// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1749839317"] = [{"values":[{"sourceSpan":{"start":[189,1],"name":".spago/websocket-moderate/v7.0.2/src/WebSocket.purs","end":[197,28]},"score":0,"packageInfo":{"values":["websocket-moderate"],"tag":"Package"},"name":"newWebSocketBinary","moduleName":"WebSocket","info":{"values":[{"type":{"tag":"ForAll","contents":["binaryType",{"tag":"ForAll","contents":["receive",{"tag":"ForAll","contents":["send",{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"WebSocketBinary"],"constraintArgs":[{"tag":"TypeVar","contents":"receive"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"WebSocketBinary"],"constraintArgs":[{"tag":"TypeVar","contents":"send"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"BinaryType"],"constraintArgs":[{"tag":"TypeVar","contents":"receive"},{"tag":"TypeVar","contents":"binaryType"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"binaryType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["WebSocket"],"WebSocketsApp"]},{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]}]},{"tag":"TypeVar","contents":"receive"}]},{"tag":"TypeVar","contents":"send"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a new websocket, where the send and receive types are expected to be binary-compatible over\nthe websocket (a `Blob` or `ArrayBuffer`).\n"}],"tag":"SearchResult"}]