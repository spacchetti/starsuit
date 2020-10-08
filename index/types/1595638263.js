// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1595638263"] = [{"values":[{"sourceSpan":{"start":[198,1],"name":".spago/routing/v9.0.1/src/Routing/Match.purs","end":[198,57]},"score":2,"packageInfo":{"values":["routing"],"tag":"Package"},"name":"eitherMatch","moduleName":"Routing.Match","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Match"],"Match"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Routing","Match"],"Match"]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"if we match something that can fail then we have to\nmatch `Either a b`. This function converts matching on such\nsum to matching on right subpart. Matching on left branch fails.\ni.e.\n```purescript\ndata Sort = Asc | Desc\nsortOfString :: String -> Either String Sort\nsortOfString \"asc\" = Right Asc\nsortOfString \"desc\" = Right Desc\nsortOfString _ = Left \"incorrect sort\"\n\nnewtype Routing = Routing Sort\nroutes :: Match Routing\nroutes = (pure Routing) <*> (eitherMatch (sortOfString <$> var))\n\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/foreign-object/v2.0.3/src/Foreign/Object.purs","end":[215,73]},"score":31,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"fromFoldable","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `Object a` from a foldable collection of key/value pairs\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[109,1],"name":".spago/intmap/v0.0.0/src/Data/IntMap.purs","end":[109,70]},"score":0,"packageInfo":{"values":["intmap"],"tag":"Package"},"name":"fromFoldable","moduleName":"Data.IntMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","IntMap"],"IntMap"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]