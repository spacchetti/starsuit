// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1929421741"] = [{"values":[{"sourceSpan":{"start":[217,1],"name":".spago/node-streams/v4.0.1/src/Node/Stream.purs","end":[221,17]},"score":11,"packageInfo":{"values":["node-streams"],"tag":"Package"},"name":"onError","moduleName":"Node.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","Stream"],"Stream"]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Listen for `error` events.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[85,1],"name":".spago/node-streams/v4.0.1/src/Node/Stream.purs","end":[89,17]},"score":11,"packageInfo":{"values":["node-streams"],"tag":"Package"},"name":"onData","moduleName":"Node.Stream","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","Stream"],"Readable"]},{"tag":"TypeVar","contents":"w"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Buffer"],"Buffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Listen for `data` events, returning data in a Buffer. Note that this will fail\nif `setEncoding` has been called on the stream.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[70,1],"name":".spago/effect/v2.0.1/src/Effect.purs","end":[70,82]},"score":128,"packageInfo":{"values":["effect"],"tag":"Package"},"name":"foreachE","moduleName":"Effect","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Loop over an array of values.\n\n`foreachE xs f` runs the computation returned by the function `f` for each\nof the inputs `xs`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/promises/v3.1.1/src/Effect/Promise.purs","end":[93,78]},"score":2,"packageInfo":{"values":["promises"],"tag":"Package"},"name":"catch","moduleName":"Effect.Promise","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Promise","Unsafe"],"Deferred"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Promise"],"Promise"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deals with any errors that may be thrown by the given promise.\n"}],"tag":"SearchResult"}]