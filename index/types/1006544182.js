// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1006544182"] = [{"values":[{"sourceSpan":{"start":[269,1],"name":".spago/routing-duplex/v0.4.1/src/Routing/Duplex.purs","end":[269,103]},"score":0,"packageInfo":{"values":["routing-duplex"],"tag":"Package"},"name":"as","moduleName":"Routing.Duplex","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["s",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"s"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Duplex"],"RouteDuplex"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Builds a codec for a custom type out of printer and parser functions.\n\n```purescript\ndata Sort = Asc | Desc\n\nsortToString :: Sort -> String\nsortToString = case _ of\n  Asc -> \"asc\"\n  Desc -> \"desc\"\n\nsortFromString :: String -> Either String Sort\nsortFromString = case _ of\n  \"asc\" -> Right Asc\n  \"desc\" -> Right Desc\n  val -> Left $ \"Not a sort: \" <> val\n\nsort :: RouteDuplex' String -> RouteDuplex' Sort\nsort = as sortToString sortFromString\n```\n"}],"tag":"SearchResult"}]