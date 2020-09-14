// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1725394992"] = [{"values":[{"sourceSpan":{"start":[205,1],"name":".spago/websocket-moderate/v7.0.2/src/WebSocket.purs","end":[214,32]},"score":0,"packageInfo":{"values":["websocket-moderate"],"tag":"Package"},"name":"newWebSocketBoth","moduleName":"WebSocket","info":{"values":[{"type":{"tag":"ForAll","contents":["binaryType",{"tag":"ForAll","contents":["receive",{"tag":"ForAll","contents":["send",{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"WebSocketBinary"],"constraintArgs":[{"tag":"TypeVar","contents":"send"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"WebSocketBinary"],"constraintArgs":[{"tag":"TypeVar","contents":"receive"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["WebSocket"],"BinaryType"],"constraintArgs":[{"tag":"TypeVar","contents":"receive"},{"tag":"TypeVar","contents":"binaryType"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"binaryType"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["WebSocket"],"WebSocketsApp"]},{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["WebSocket"],"WebSocketsApp"]},{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]}]},{"tag":"TypeVar","contents":"receive"}]},{"tag":"TypeVar","contents":"send"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a new websocket, where binary data is handled by the binary app when available, otherwise\nhandled by the string app by default.\n"}],"tag":"SearchResult"}]