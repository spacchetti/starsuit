// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["207810479"] = [{"values":[{"sourceSpan":{"start":[127,3],"name":".spago/payload/v0.3.1/src/Payload/Server/Response.purs","end":[127,64]},"score":0,"packageInfo":{"values":["payload"],"tag":"Package"},"name":"toSpecResponse","moduleName":"Payload.Server.Response","info":{"values":[{"typeClassArguments":[["docRoute",{"tag":"NamedKind","contents":[["Prim"],"Symbol"]}],["a",null],["b",null]],"typeClass":[["Payload","Server","Response"],"ToSpecResponse"],"type":{"tag":"ForAll","contents":["docRoute",{"tag":"NamedKind","contents":[["Prim"],"Symbol"]},{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Payload","Server","Response"],"ToSpecResponse"],"constraintArgs":[{"tag":"TypeVar","contents":"docRoute"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"docRoute"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Payload","ResponseTypes"],"Result"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Payload","ResponseTypes"],"Response"]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1796,3],"name":".spago/option/v6.0.1/src/Option.purs","end":[1800,30]},"score":0,"packageInfo":{"values":["option"],"tag":"Package"},"name":"readImplOption","moduleName":"Option","info":{"values":[{"typeClassArguments":[["list",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]}],["option",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}}]],"typeClass":[["Option"],"ReadForeignOption"],"type":{"tag":"ForAll","contents":["list",{"tag":"NamedKind","contents":[["Prim","RowList"],"RowList"]},{"tag":"ForAll","contents":["option",{"tag":"Row","contents":{"tag":"NamedKind","contents":[["Prim"],"Type"]}},{"tag":"ForAll","contents":["proxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Option"],"ReadForeignOption"],"constraintArgs":[{"tag":"TypeVar","contents":"list"},{"tag":"TypeVar","contents":"option"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"list"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"F"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Option"],"Option"]},{"tag":"TypeVar","contents":"option"}]}}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"The `proxy` can be anything so long as its type variable has kind `Prim.RowList.RowList`.\n\nIt will commonly be `Type.Data.RowList.RLProxy`, but doesn't have to be.\n"}],"tag":"SearchResult"}]